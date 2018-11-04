#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <curl/curl.h>

#define HTTP_OK 200L
#define REQUEST_TIMEOUT_SECONDS 2L

#define URL_OK 0
#define URL_ERROR 1
#define URL_UNKNOWN 2

#define MAX_PROCESSES 1024

typedef struct {
	int ok, error, unknown;
} UrlStatus;

void usage() {
	fprintf(stderr, "usage:\n\t./ex2 FILENAME NUMBER_OF_PROCESSES\n");
	exit(EXIT_FAILURE);
}

int check_url(const char *url) {
	CURL *curl;
	CURLcode res;
	long response_code = 0L;

	curl = curl_easy_init();

	if(curl) {
		curl_easy_setopt(curl, CURLOPT_URL, url);
		curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
		curl_easy_setopt(curl, CURLOPT_TIMEOUT, REQUEST_TIMEOUT_SECONDS);
		curl_easy_setopt(curl, CURLOPT_NOBODY, 1L); /* do a HEAD request */

		res = curl_easy_perform(curl);
		if(res == CURLE_OK) {
			curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response_code);
			if (response_code == HTTP_OK) {
				return URL_OK;
			} else {
				return URL_ERROR;
			}
		}

		curl_easy_cleanup(curl);
	}

	return URL_UNKNOWN;
}

void serial_checker(const char *filename) {
	UrlStatus results = {0};
	FILE *toplist_file;
	char *line = NULL;
	size_t len = 0;
	ssize_t read;

	toplist_file = fopen(filename, "r");

	if (toplist_file == NULL) {
		exit(EXIT_FAILURE);
	}

	while ((read = getline(&line, &len, toplist_file)) != -1) {
		if (read == -1) {
		    perror("unable to read line from file");
		}
		line[read-1] = '\0'; /* null-terminate the URL */
		switch (check_url(line)) {
		case URL_OK:
			results.ok += 1;
			break;
		case URL_ERROR:
			results.error += 1;
			break;
		default:
			results.unknown += 1;
		}
	}

	free(line);
	fclose(toplist_file);

	printf("%d OK, %d Error, %d Unknown\n",
			results.ok,
			results.error,
			results.unknown);
}

void worker_checker(const char *filename, int pipe_write_fd, int worker_id, int workers_number) {

    UrlStatus results = {0};
    FILE *toplist_file;
    char *line = NULL;
    size_t len = 0;
    ssize_t read;
    int count = 0;
    int check;

    toplist_file = fopen(filename, "r");

    if (toplist_file == NULL) {
        perror("Failed to open the file");
        exit(EXIT_FAILURE);
    }

    while ((read = getline(&line, &len, toplist_file)) != -1) {
	if (read == -1) {
        perror("unable to read line from file");
   	}
        line[read - 1] = '\0'; /* null-terminate the URL */

        // Each worker will check only a distinct subset of the lines.
        if ((count % workers_number) == worker_id) {
            switch (check_url(line)) {
                case URL_OK:
                    results.ok += 1;
                    break;
                case URL_ERROR:
                    results.error += 1;
                    break;
                default:
                    results.unknown += 1;
            }
        }
        count++;
    }
    free(line);
    if (fclose(toplist_file) == -1) {
        perror("failed to close the file");
        exit(EXIT_FAILURE);
    }
    if (write(pipe_write_fd, &results, sizeof(UrlStatus)) == -1) {
        perror("failed to write to the pipe");
        exit(EXIT_FAILURE);
    }
}

void parallel_checker(const char *filename, int number_of_processes) {

        UrlStatus urlStatus = {0};
        UrlStatus findings = {0};
        int i;
        int fd[2];
        pid_t pid;

        if (filename == NULL){
            perror("file does not exist");
            exit(EXIT_FAILURE);
        }
        if(pipe(fd) == -1) {
            perror("error creating pipe");
            exit(EXIT_FAILURE);
        }
    for (int i = 0; i < number_of_processes; i++) {
        pid = fork();
        if (pid == -1) {
            printf("failed to fork");
            exit(EXIT_FAILURE);
        }
        if (pid == 0){
            close(fd[0]);
            worker_checker(filename,fd[1] ,i,number_of_processes);
            close(fd[1]);
            exit(EXIT_SUCCESS);
        }
    }
    int j;
    for (j = 0; j <number_of_processes; j++) {
        if (wait(NULL) == -1){
            perror("failed to wait");
            exit(EXIT_FAILURE);
        }
        if (read(fd[0] ,&urlStatus , sizeof(UrlStatus)) == -1){
            perror("error reading");
            exit(EXIT_FAILURE);
        }
        findings.ok += urlStatus.ok;
        findings.error += urlStatus.error;
        findings.unknown += urlStatus.unknown;

    }
    if (close(fd[0]) == -1 || close(fd[1]) == -1){
        printf("error closing pipe");
        exit(EXIT_FAILURE);
    }
    printf("%d OK, %d Error, %d Unknown\n", findings.ok, findings.error, findings.unknown);

}

int main(int argc, char **argv) {
	if (argc != 3) {
		usage();
	} else if (atoi(argv[2]) == 1) {
		serial_checker(argv[1]);
	} else {
		parallel_checker(argv[1], atoi(argv[2]));
	}

	return EXIT_SUCCESS;
}

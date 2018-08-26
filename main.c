#include <stdio.h>
#include <string.h>
#include <time.h>
#include <stdlib.h>



int printMatches(int numberOfMatches){
    for (int i = 0; i < numberOfMatches; ++i) {
        printf("|");
    }
    printf("\n\n");
    return 0;
}



int startGame(int numberOfMatches ,int whoStarts){
    printf("\n\n\n\n");
    if (whoStarts == 1) {
        while (numberOfMatches > 0) {
            numberOfMatches = computerTurn(numberOfMatches);
			printMatches(numberOfMatches);
            if (checkIfLost(numberOfMatches)== 1) {
				printf("You Lost Haha!\nWanna play again?(yes/no)\n");
				getAnswer();
			}
			printf("there are %d sticks left\n",numberOfMatches);
			numberOfMatches = playerTurn(numberOfMatches);
			if (checkIfLost(numberOfMatches)== 1) {
			printf("You Cheated!\n\nWanna play again?(yes/no)\n");
			getAnswer();
				}
			}
		}else{
			while (numberOfMatches > 0) {
				printf("there are %d sticks left\n",numberOfMatches);
				printMatches(numberOfMatches);
				numberOfMatches = playerTurn(numberOfMatches);
				if (checkIfLost(numberOfMatches) == 1) {
					printf("You Cheated!\n\nWanna play again?(yes/no)\n");
					getAnswer();
				}
            numberOfMatches = computerTurn(numberOfMatches);
            if (checkIfLost(numberOfMatches) == 1) {
				printf("You Lost Haha!\nWanna play again?(yes/no)\n");
				getAnswer();			
			}

		}
	}
}



int getAnswer(){
	char FisrtPlayer[20];
	char replay[20];
	scanf("%s",replay);
	if(strcmp(replay,"yes") == 0){
		begin();
	}else if(strcmp(replay,"no") == 0){
		printf("\n\nBye Bye !\n");
		sleep();
	}else{
		printf("what ? type a normal answer\n");
		getAnswer();
	}
	return 0;
}



int checkIfLost(int matches){
    if (matches<=0) return 1;
    return 0;
}


int computerTurn(int matches){
    int strategy = matches % 5;
	if(strategy==0) strategy = (rand() % 4) + 1;
    printf("I took away %d sticks\n\n" , strategy);
    printMatches(matches - strategy);
	printf("\n\n");
    return (matches - strategy);
}


int playerTurn(int matches){
    int number;
    printf("Choose how many sticks you want to take off(1 ,2 ,3 or 4)\n");
    while ((scanf("%d" , &number) != 1) || number > 4 || number <= 0 || (number > matches)){
		if (number > 4 || number <= 0) printf("Choose number between 1 to 4 ! don't cheat !\n\n");
		else if (number > matches) printf("there are not enoguh sticks! choose again \n");
		else printf("please type a numeric value");
    }
    printMatches(matches - number);
	printf("\n\n");
    return (matches - number);
}

int begin(){
	char whoBegins[20];
	printf("who should start , me or you ?\n");
    scanf("%s" , whoBegins);
	while(!((strcmp(whoBegins,"you")==0) || strcmp(whoBegins,"me")==0)) {
		printf("what?\n");
		scanf("%s" , whoBegins);
	}
    if (strcmp(whoBegins,"you")==0){
        startGame(21 , 1);
    }else {
        startGame(21,0);
    }
	return 0;
}
	
	


int main() {
    char name [20] ;
    char answer[20];

    printf("Hello ! please write down your name\n");
    scanf("%s" , name);
    printf("Hello %s ! \n" , name );
    printf("Are you ready to play a small game against the allmighty unbeatable computer  ? (yes/no) \n");
    scanf("%s" , answer);
    while (strcmp(answer,"yes") !=0){
        printf("I'm waiting for the right answer (hint:yes)\n");
        scanf("%s" , answer);
    }
    printf("great! now let's play\nthe rules are simple : there are 21 sticks , each turn you have to take off 1 to 4 sticks, the one which takes off the last stick wins. \nShall we begin ? (yes/no) \n");
    scanf("%s" , answer);
    while (strcmp(answer,"yes") !=0){
        printf("I'm waiting for the right answer (hint:yes) \n");
        scanf("%s" , answer);
    }
	begin();
    return 0;
}

const fs = require('fs');

function inverseChars(file_a, file_b){
    try {
        let reversedData = fs.readFileSync(file_a).toString().split('').reverse().join('');
        fs.writeFile(file_b, reversedData, (error) => {
            if (error) {
                console.error(error);
                return;
            }
        });
    } catch (e) {
        console.error(e);
    }
}

inverseChars(process.argv[2], process.argv[3]);

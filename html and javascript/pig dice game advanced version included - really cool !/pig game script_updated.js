var score , current_round_score , current_player , game_ended , dice_value , secondDice ,doubles;
var advanced_mode = false;
var winning_score = 100;

initialize();

//mode changing
document.getElementsByClassName("btn-mode")[0].addEventListener('click',function(){
    document.getElementsByClassName("btn-mode")[0].textContent = (advanced_mode ? "Advanced mode" : "Regular mode" );
    initialize();
    advanced_mode = !advanced_mode;
    if(advanced_mode){
        document.getElementsByClassName("dice")[0].style.left = "45%";
    }else{
        document.getElementsByClassName("dice2")[0].style.display = "none";
        document.getElementsByClassName("dice")[0].style.left = "50%";
    }
})

//make an on click event for the 'roll dice' button 
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(!game_ended){
        //Winning score choosing
        var score = document.getElementsByClassName("score")[0].value;
        if(score){
            winning_score = score;
        }else{
            winning_score =(advanced_mode ? 200: 100);
        }

        //get a random number
        dice_value = Math.floor(Math.random() * 6) + 1;
        secondDice = Math.floor(Math.random() * 6) + 1;
        if((secondDice == dice_value) && (dice_value !=1) && advanced_mode){
            doubles += 1 ;
        }
        
        //show dice
        document.querySelector('.dice').style.display = 'block';
        
        //show the correct img of the dice
        document.querySelector('.dice').src = "dice-" + dice_value + ".png";
        if(advanced_mode){
        //show 2nd dice
        document.querySelector('.dice2').src = "dice-" + secondDice + ".png";
        document.querySelector('.dice2').style.display = 'block';
        }
             //checks if got two ones or got two doubles in a row (only for advanced mode)
             if(advanced_mode && (doubles == 2 || (secondDice == 1 && dice_value ==1))){
                document.getElementById("current-" + current_player).textContent = 0;
                current_round_score = 0;
                dice_value = 0;

                //updates score according to dice result
                document.getElementById("score-" + current_player).textContent =(doubles == 2 ? Math.floor(scores[current_player] / 2) : 0);
                scores[current_player] = (doubles == 2 ? Math.floor(scores[current_player] / 2) : 0);
                document.querySelector('.player-' + current_player + '-panel').classList.remove('active');
                current_player = (current_player + 1) % 2;  
                document.querySelector('.player-' + current_player + '-panel').classList.add('active');
                var message = (doubles == 2 ?"got 2 doubles ,lost half of your points" : "got two 1s, lost all your points");
                doubles = 0;
                alert(message);
                return;
             }
        //checks number is not 1
        if((dice_value > 1 && secondDice > 1 && advanced_mode)||dice_value > 1 && !advanced_mode){
            if(dice_value != secondDice) doubles = 0;
            current_round_score += (advanced_mode ? secondDice + dice_value : dice_value);
            document.getElementById("current-" + current_player).textContent = current_round_score;
           }
        else{
            current_round_score = 0;
            document.getElementById("current-" + current_player).textContent = 0;
            doubles = 0;

            //changes active player
            document.querySelector('.player-' + current_player + '-panel').classList.remove('active');
            current_player = (current_player + 1) % 2;  
            document.querySelector('.player-' + current_player + '-panel').classList.add('active');
            
        }
    }
});

//when player hits the hold button 
document.getElementsByClassName("btn-hold")[0].addEventListener('click' , function(){
    if(!game_ended){
        //add score to current player and initialize current round score to zero
        document.getElementById("score-" + current_player).textContent =scores[current_player] + current_round_score;
        document.getElementById("current-" + current_player).textContent = 0;
        scores[current_player] += current_round_score;
        current_round_score = 0;
        dice_value = 0;
        doubles = 0;

        //check if won 
        if(scores[current_player] >= winning_score){
            document.getElementById("name-" + current_player).textContent = "Winner !";
            document.querySelector('.player-' + current_player + '-panel').classList.remove('active');
            document.querySelector(".dice").style.display = 'none';  
            document.getElementsByClassName("dice2")[0].style.display = "none";
            game_ended = true;
        }else{
        //changes active player
        document.querySelector('.player-' + current_player + '-panel').classList.toggle('active');
        current_player = (current_player + 1) % 2;  
        document.querySelector('.player-' + current_player + '-panel').classList.toggle('active');
         //hide dice 
         document.querySelector(".dice").style.display = 'none';  
         document.getElementsByClassName("dice2")[0].style.display = "none";
       }
    }
})


// start new game
document.getElementsByClassName("btn-new")[0].addEventListener('click',initialize);
function initialize(){
    game_ended = false;
    //hide dice
    document.querySelector('.dice').style.display = 'none';
    document.getElementsByClassName("dice2")[0].style.display = "none";
    //make player 1 active
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //sets names again
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    //set all to zero
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    current_player = 0;
    current_round_score = 0;
    scores = [0,0];
    doubles = 0;
}

//when user asks to see instructions
document.getElementsByClassName("btn-rules")[0].addEventListener('click',showInstructions);

function showInstructions(){
    if(!advanced_mode){
    alert("Welcome to Pig dice game ! \nThese are the rules: The game has 2 players, playing in rounds each turn.\nA player rolls a dice as many times as he wishes" + 
    ", each result gets added to his ROUND score, BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.\n" +
    "Each player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn " +
    " The first player to reach the chosen number of points (default is 100) on GLOBAL score wins the game !");
    }else{
     alert("Welcome to Advanced Pig dice game ! \nThese are the rules: The game has 2 players, playing in rounds each turn.A player rolls 2 dice as many times as he wishes" + 
    ", each result gets added to his ROUND score, BUT, if the player rolls a 1 (in any of the dice), all his ROUND score gets lost. After that, it's the next player's turn.\nIn the advanced version you should be" +
    " careful , get twice a double ,and you lose HALF your GLOBAL points and all your ROUND score , get a double of ones and you lose ALL your GLOBAL and ROUND score. Each player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn " +
    " The first player to reach the chosen number of points (default is 200) on GLOBAL score wins the game !");
    }
}

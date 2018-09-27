var score , current_round_score , current_player , game_ended;

initialize();

//hide the dice img at the beggining of the game
document.querySelector('.dice').style.display = 'none';

//make an on click event for the 'roll dice' button 
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(!game_ended){
        //get a random number
        var dice_value = Math.floor(Math.random() * 6) + 1;

        //show dice
        document.querySelector('.dice').style.display = 'block';
        
        //show the correct img of the dice
        document.querySelector('.dice').src = "dice-" + dice_value + ".png";

        //checks number is not 1
        if(dice_value > 1){
            current_round_score += dice_value;
            document.getElementById("current-" + current_player).textContent = current_round_score;
        }else{
            current_round_score = 0;
            document.getElementById("current-" + current_player).textContent = 0;

            //changes active player
            document.querySelector('.player-' + current_player + '-panel').classList.remove('active');
            current_player = (current_player + 1) % 2;  
            document.querySelector('.player-' + current_player + '-panel').classList.add('active');

            //hide dice 
            document.querySelector(".dice").style.display = 'none';
            
            
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

        //check if won 
        if(scores[current_player] >= 100){
            document.getElementById("name-" + current_player).textContent = "Winner !";
            document.querySelector('.player-' + current_player + '-panel').classList.remove('active');
            game_ended = true;
        }else{
        //changes active player
        document.querySelector('.player-' + current_player + '-panel').classList.toggle('active');
        current_player = (current_player + 1) % 2;  
        document.querySelector('.player-' + current_player + '-panel').classList.toggle('active');  
       }
    }
})


// start new game
document.getElementsByClassName("btn-new")[0].addEventListener('click',initialize);

function initialize(){
    game_ended = false;
    //hide dice
    document.querySelector('.dice').style.display = 'none';
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
}

//when user asks to see instructions
document.getElementsByClassName("btn-rules")[0].addEventListener('click',showInstructions);

function showInstructions(){
    alert("Welcome to Pig dice game ! \nThese are the rules: The game has 2 players, playing in rounds each turn.\n A player rolls a dice as many times as he whishes " + 
    " , each result gets added to his ROUND score, BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.\n" +
    "The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn " +
    " The first player to reach 100 points on GLOBAL score wins the game !");
}

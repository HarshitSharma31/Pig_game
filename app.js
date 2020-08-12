
var scores, roundScore, activePlayer, gamePlaying;
init();

// document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.btn-roll').addEventListener('click', function () {
    
    if (gamePlaying)
        {
// 1. A Random Number.
    var dice = Math.floor(Math.random() *6) + 1;
    
// 2. Display the result.
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice +'.png';
    
    
// 3. Update the round score IF the number obtained on dice was not 1.
    if(dice > 1)
        {
            //add to score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else
            {
            // Next player            
            nextPlayer();
            }
       }    
});
//code to give functionality to the dice rolling button 
// Note here we have created this anonymous function because we only want to use it with ROLL DICE button



// Giving funcationality to HOLD Button

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying)
        {
    
    // 1. Add current score to players total score
    scores[activePlayer] += roundScore;
    
    // 2. update the UI.
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    
    // 3. check if the player has won the game.
    if(scores[activePlayer] >= 100)
        {
            document.querySelector('#name-' + activePlayer).textContent = 'winner !!😀';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
        // Next player
        nextPlayer();
             }
        }
});

function nextPlayer(){
    
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
            document.querySelector('.dice').style.display = 'none';
    

}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){

scores = [0,0];     // Initially scores of both the players are zero
roundScore = 0;     // Initially in each round the score of each player is zero
activePlayer = 0;   // Variable to keep track of currently active player
gamePlaying = true;
    
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}

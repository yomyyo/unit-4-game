//Global Variables
var wins = 0;
var losses = 0;
var total = 0;

//Display the initial score
$("#totalScoreDiv").text(total);

//function for the logic of the game
function clickedGem(){

    //initialize variables for game first playthrough
    var randomNum =  randomIntFromInterval(19, 120);
    var gemOneVal = Math.floor(Math.random() * 12) + 1;
    var gemTwoVal = Math.floor(Math.random() * 12) + 1;
    var gemThreeVal = Math.floor(Math.random() * 12) + 1;
    var gemFourVal = Math.floor(Math.random() * 12) + 1;

    // displays the current number of wins, losses, and the current random number
    displayScore(randomNum);

    //When gemOne button is clicked, increase total, update the total display
    $('#gemOne').on("click", function(){
        total += gemOneVal;
        $("#totalScoreDiv").text(total);

        //if total is more than the random number, increase losses and reset all values
        if(total > randomNum){
            losses++;
            total = 0;
            gemOneVal = Math.floor(Math.random() * 12) + 1;
            gemTwoVal = Math.floor(Math.random() * 12) + 1;
            gemThreeVal = Math.floor(Math.random() * 12) + 1;
            gemFourVal = Math.floor(Math.random() * 12) + 1;
            randomNum =  randomIntFromInterval(19, 120);
            displayScore(randomNum);
            $("#totalScoreDiv").text(total);
        }
    
        //if total is more than the random number, increase wins and reset all values
        if(total == randomNum){
            wins++;
            total = 0;
            gemOneVal = Math.floor(Math.random() * 12) + 1;
            gemTwoVal = Math.floor(Math.random() * 12) + 1;
            gemThreeVal = Math.floor(Math.random() * 12) + 1;
            gemFourVal = Math.floor(Math.random() * 12) + 1;
            randomNum =  randomIntFromInterval(19, 120);
            displayScore(randomNum);
            $("#totalScoreDiv").text(total);
        }
    })

    //When gemTwo button is clicked, increase total, update the total display
    $('#gemTwo').on("click", function(){
        total += gemTwoVal;
        $("#totalScoreDiv").text(total);

        //if total is more than the random number, increase losses and reset all values
        if(total > randomNum){
            losses++;
            total = 0;
            gemOneVal = Math.floor(Math.random() * 12) + 1;
            gemTwoVal = Math.floor(Math.random() * 12) + 1;
            gemThreeVal = Math.floor(Math.random() * 12) + 1;
            gemFourVal = Math.floor(Math.random() * 12) + 1;
            randomNum =  randomIntFromInterval(19, 120);
            displayScore(randomNum);
            $("#totalScoreDiv").text(total);
        }
    
        //if total is more than the random number, increase wins and reset all values
        if(total == randomNum){
            wins++;
            total = 0;
            gemOneVal = Math.floor(Math.random() * 12) + 1;
            gemTwoVal = Math.floor(Math.random() * 12) + 1;
            gemThreeVal = Math.floor(Math.random() * 12) + 1;
            gemFourVal = Math.floor(Math.random() * 12) + 1;
            randomNum =  randomIntFromInterval(19, 120);
            displayScore(randomNum);
            $("#totalScoreDiv").text(total);
        }
    })

    //When gemThree button is clicked, increase total, update the total display
    $('#gemThree').on("click", function(){
        total += gemThreeVal;
        $("#totalScoreDiv").text(total);

        //if total is more than the random number, increase losses and reset all values
        if(total > randomNum){
            losses++;
            total = 0;
            gemOneVal = Math.floor(Math.random() * 12) + 1;
            gemTwoVal = Math.floor(Math.random() * 12) + 1;
            gemThreeVal = Math.floor(Math.random() * 12) + 1;
            gemFourVal = Math.floor(Math.random() * 12) + 1;
            randomNum =  randomIntFromInterval(19, 120);
            displayScore(randomNum);
            $("#totalScoreDiv").text(total);
        }

        //if total is more than the random number, increase wins and reset all values
        if(total == randomNum){
            wins++;
            total = 0;
            gemOneVal = Math.floor(Math.random() * 12) + 1;
            gemTwoVal = Math.floor(Math.random() * 12) + 1;
            gemThreeVal = Math.floor(Math.random() * 12) + 1;
            gemFourVal = Math.floor(Math.random() * 12) + 1;
            randomNum =  randomIntFromInterval(19, 120);
            displayScore(randomNum);
            $("#totalScoreDiv").text(total);
        }
    })

    //When gemFouur button is clicked, increase total, update the total display
    $('#gemFour').on("click", function(){
        total += gemFourVal;
        $("#totalScoreDiv").text(total);

        //if total is more than the random number, increase losses and reset all values
        if(total > randomNum){
            losses++;
            total = 0;
            gemOneVal = Math.floor(Math.random() * 12) + 1;
            gemTwoVal = Math.floor(Math.random() * 12) + 1;
            gemThreeVal = Math.floor(Math.random() * 12) + 1;
            gemFourVal = Math.floor(Math.random() * 12) + 1;
            randomNum =  randomIntFromInterval(19, 120);
            displayScore(randomNum);
            $("#totalScoreDiv").text(total);
        }

        //if total is more than the random number, increase wins and reset all values
        if(total == randomNum){
            wins++;
            total = 0;
            gemOneVal = Math.floor(Math.random() * 12) + 1;
            gemTwoVal = Math.floor(Math.random() * 12) + 1;
            gemThreeVal = Math.floor(Math.random() * 12) + 1;
            gemFourVal = Math.floor(Math.random() * 12) + 1;
            randomNum =  randomIntFromInterval(19, 120);
            displayScore(randomNum);
            $("#totalScoreDiv").text(total);
        }
    })
}

//function used to display wins, losses, and the current random number
function displayScore(randomNum){
    $("#randomNumDiv").text("Get this number: " + randomNum);
    $("#winsDiv").text("Wins: " + wins);
    $("#lossesDiv").text("Losses: " + losses);
}

//function that chooses a random number between a minimum and a maximum
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

clickedGem();
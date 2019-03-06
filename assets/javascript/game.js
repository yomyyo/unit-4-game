var wins = 0;
var losses = 0;
var total = 0;
$("#totalScoreDiv").text(total);


function clickedGem(){

    var randomNum =  randomIntFromInterval(19, 120);
    var gemOneVal = Math.floor(Math.random() * 12) + 1;
    var gemTwoVal = Math.floor(Math.random() * 12) + 1;
    var gemThreeVal = Math.floor(Math.random() * 12) + 1;
    var gemFourVal = Math.floor(Math.random() * 12) + 1;
    displayScore(randomNum);

    
    $('#gemOne').on("click", function(){
        total += gemOneVal;
        $("#totalScoreDiv").text(total);
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

    $('#gemTwo').on("click", function(){
        total += gemTwoVal;
        $("#totalScoreDiv").text(total);
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

    $('#gemThree').on("click", function(){
        total += gemThreeVal;
        $("#totalScoreDiv").text(total);
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

    $('#gemFour').on("click", function(){
        total += gemFourVal;
        $("#totalScoreDiv").text(total);
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

function displayScore(randomNum){
    $("#randomNumDiv").text("Get this number: " + randomNum);
    $("#winsDiv").text("Wins: " + wins);
    $("#lossesDiv").text("Losses: " + losses);
}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

clickedGem();
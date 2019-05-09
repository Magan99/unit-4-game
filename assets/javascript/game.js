$(document).ready(function() {



    var compPick = Math.floor(Math.random() * 120) + 19;
        console.log("compPick: " + compPick);
        $(".randomNumber").html(compPick);
 
    // var randomArray = [];
    //     console.log("randomArray: " + randomArray);
 
    // for (i = 0 ; i < 4 ; i++) {
    //     var gemNumber = Math.floor(Math.random() * 12) + 1;
    //         console.log("gemNumber: " + gemNumber);
    //     randomArray.push(gemNumber);
    // }
 
    var gemOne = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 1: " + gemOne);
        $("#redbutton").html("<img src=" + "assets/images/red.jpeg" + " value=" + gemOne + ">");
 
    var gemTwo = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 2: " + gemTwo);
        $("#purplebutton").html("<img src=" + "assets/images/purple.jpeg" + " value=" + gemTwo + ">");
 
    var gemThree = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 3: " + gemThree);
        $("#bluebutton").html("<img src=" + "assets/images/blue.png" + " value=" + gemThree + ">");
 
    var gemFour = Math.floor(Math.random() * 12) + 1;
        console.log("Gem 4: " + gemFour);
        $("#greenbutton").html("<img src=" + "assets/images/green.jpeg" + " value=" + gemFour + ">");
 
    var wins = 0;
        console.log("wins: " + wins);
 
    var losses = 0;
        console.log("losses: " + losses);
 
    var score = 0;
        console.log("score: " + score);
 
    function reset () {
        compPick = Math.floor(Math.random() * 120) + 19;
            console.log("compPick: " + compPick);
        $(".randomNumber").html(compPick);
 
        score = 0;
        $(".scoreDisplay").html(score);
 
        gemOne = Math.floor(Math.random() * 12) + 1;
            console.log("Gem 1: " + gemOne);
        $("#redbutton").html("<img src=" + "assets/images/red.jpeg" + " value=" + gemOne + ">");
 
        gemTwo = Math.floor(Math.random() * 12) + 1;
            console.log("Gem 2: " + gemTwo);
        $("#purplebutton").html("<img src=" + "assets/images/purple.jpeg" + " value=" + gemTwo + ">");
 
        gemThree = Math.floor(Math.random() * 12) + 1;
            console.log("Gem 3: " + gemThree);
        $("#bluebutton").html("<img src=" + "assets/images/blue.png" + " value=" + gemThree + ">");
 
        gemFour = Math.floor(Math.random() * 12) + 1;
            console.log("Gem 4: " + gemFour);
        $("#greenbutton").html("<img src=" + "assets/images/green.jpeg" + " value=" + gemFour + ">");
 
        $("img").on("click", function () {
            var newScore = score += parseInt($(this).attr("value"));
                console.log("New Score: " + newScore);
            $(".scoreDisplay").html(newScore);
 
            if(newScore === compPick) {
                wins++ ;
                $(".wins").html("Wins: " + wins);
                    console.log("Wins: " + wins);
                    reset();
 
            }
 
            else if(newScore > compPick) {
                losses++ ;
                $(".losses").html("Losses: " + losses);
                    console.log("Losses: " + losses);
                    reset();
 
            }
 
        });
 
 
 
    }
 
    $("img").on("click", function () {
        var newScore = score += parseInt($(this).attr("value"));
            console.log("New Score: " + newScore);
        $(".scoreDisplay").html(newScore);
 
        if(newScore === compPick) {
            wins++ ;
            $(".wins").html("Wins: " + wins);
                console.log("Wins: " + wins);
                reset();
        }
 
        else if(newScore > compPick) {
            losses++ ;
            $(".losses").html("Losses: " + losses);
                console.log("Losses: " + losses);
                reset();
        }
 
    });
 
 });

var wins = 0;
var loses = 0;
var points = 0;





$(document).ready(function(){
    var randomNumber = Math.floor(Math.random() * 120) + 19;

    $("#random-number").text(randomNumber)

    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;


    function winner(){
        wins++;
        $("#wins").text("wins: " + wins);
    }
    function loser(){
        loses++;
        reset();
        $("#loses1").html("loses: " + loses);
    }

    function reset(){
        Random=Math.floor(Math.random()*102)+19;
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*12)+1;
        num2= Math.floor(Math.random()*12)+1;
        num3= Math.floor(Math.random()*12)+1;
        num4= Math.floor(Math.random()*12)+1;
        points= 0;
        $('#finalTotal').text(points);
    }

    $("#crystal1").on("click", function(){
        console.log(crystal1);
        points = points + crystal1;
        $("#total-score").text(points);
        if(points=== randomNumber){
            winner();
        }
        else if(points > randomNumber){
            loser();
        };
    });
    $("#crystal2").on("click", function(){
        console.log(crystal2);
        points = points + crystal2;
        $("#total-score").text( points);
        if(points=== randomNumber){
            winner();
        }
        else if(points > randomNumber){
            loser();
        };
    });
    $("#crystal3").on("click", function(){
        console.log(crystal3);
        points = points + crystal3
        $("#total-score").text( points);
        if(points=== randomNumber){
            winner();
        }
        else if(points > randomNumber){
            loser();
        };
    });
    $("#crystal4").on("click", function(){
        console.log(crystal4);
       points = points + crystal4
        $("#total-score").text( points);
        if(points=== randomNumber){
            winner();
        }
        else if(points > randomNumber){
            loser();
        };
    }); 
    

});

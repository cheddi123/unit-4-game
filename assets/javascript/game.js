

var wins = 0;
var losses = 0;
var score = 0;
var ranNumber;
var ifOverNumber = false;
var buttonNumber;



function initializer() {
  
    score = 0;

    $("#score").text(score);
   // random number generator between 19 and 102
    ranNumber = Math.floor(Math.random() * 102) + 19;
    console.log(ranNumber);

    // this displays the random number
    $("#computerRanNumber").text(ranNumber);

    // 4 random numbers are  assigned to each crystal between 1 to 11
    buttonNumber = Math.floor(Math.random() * 12) + 1;
    console.log(buttonNumber);
    $("#button1").val(buttonNumber)

    buttonNumber = Math.floor(Math.random() * 12) + 1;
    console.log(buttonNumber);
    $("#button2").val(buttonNumber)

    buttonNumber = Math.floor(Math.random() * 12) + 1;
    console.log(buttonNumber);
    $("#button3").val(buttonNumber)

    buttonNumber = Math.floor(Math.random() * 12) + 1;
    console.log(buttonNumber);
    $("#button4").val(buttonNumber)

}

 
$(".button button").on("click", function () {
    score += parseInt($(this).val());

    if (score < ranNumber) {

        $("#score").text(score);
        console.log(score);
    }

    else if (score === ranNumber) {

        wins++;
        $("#score").text(score);
        $("#totalWins").text(wins);
        alert("Congratulations, you reached the target number");
        initializer();
       
      
        
    }

    else {
        losses++;
        $("#totalLosses").text(losses);
        alert(" Sorry you loss, try  again")


        initializer();

    }


})


initializer();





//   for(var i=0; i<10;i++){
//       var butt = $("<h2>");
//       $(butt).text("hello "+i );
//       $(butt).addClass("buttonClass")
//       $(butt).attr("val", Math.floor(Math.random()*10));
//       $(".replica").append(butt);
//       console.log("yes")

//   }

//   $(".buttonClass").on("click", function(){
//       console.log($(this).attr("val"));
//   })
// function loop(){
//   for (var i=0; i<10; i++) {

//     var button = $("<button>")
//     $(button).addClass("buttonClass")
//     $(button).attr("value", Math.floor((Math.random() * 10) + 1))
//     $("#replica").append(button)

//   }

//   $(".buttonClass").on( "click", function() {
//     console.log($(this).attr("value"))
//   });
// }
// loop();



const iconsDiv = document.querySelectorAll(".icons-div");
let iconClicked ;
const yourAnswer = document.querySelector(".your-answer");

const array=[document.querySelector(".blue") , document.querySelector(".yellow") ,document.querySelector(".red")]
let score = 0 ;

let rulesText = $(".rules-div-text");
let closeIcon =$(".close");
let rulesImg = $(".rules-img");
let rulesDivDiv = $(".rules-div-div");
let again = $(".again");


if($(window).width() <= 850){

    console.log("Hello");
    $(".rules-div").empty();
    $(".rules-div").append(rulesText , rulesImg ,closeIcon);
    $(".again").remove();
    $(".again-nav").append(again);
    if($(window).width() >= 850){
        $(".rules-div").empty();
        $(".rules-div").append(rulesDivDiv , rulesImg);
        $(".again").remove();    
        $(again).insertAfter(".your-answer")
    }
}


for(let i = 0 ; i<3 ; i++){
    iconsDiv[i].addEventListener("click", ()=>{ 
        iconClicked = iconsDiv[i].innerHTML;
        $(".icons").css("display" , "none");


        $(iconClicked).appendTo(".your-answer");
        $(".answer").css("display" , "flex")
  
        if($(".your-answer img").hasClass("paper")){
            $(".your-answer").css("border-color" , "hsl(230, 89%, 62%)");
        }else if($(".your-answer img").hasClass("scissors")){
            $(".your-answer").css("border-color" , "hsl(39, 89%, 49%)")
        }else{
            $(".your-answer").css("border-color" , "hsl(349, 71%, 52%)")
        }

        setTimeout(()=>{

                let randomInt=Math.floor(Math.random() *3 );
                let randomImg = array[randomInt].innerHTML;

                $(".again").css("display" , "flex");
                $(".computer-answer").addClass("background");
                $(".computer-answer").removeClass("background2");
                $(randomImg).appendTo(".computer-answer");


                if($(".computer-answer img").hasClass("paper")){
                    $(".computer-answer").css("border-color" , "hsl(230, 89%, 62%)");
                }else if($(".computer-answer img").hasClass("scissors")){
                    $(".computer-answer").css("border-color" , "hsl(39, 89%, 49%)")
                }else{
                    $(".computer-answer").css("border-color" , "hsl(349, 71%, 52%)")
                } 

                if($(".computer-answer img").attr('class') == $(".your-answer img").attr('class')){
                    $(".check").html("DRAW");
                    console.log("draw");
                }else{

                    //  If you choose ROCK
                    if($(".your-answer img").attr('class') == "rock" && 
                    $(".computer-answer img").attr('class')=="paper"){

                        $(".check").html("YOU LOSE");

                    }else if($(".your-answer img").attr('class') == "rock" &&
                     $(".computer-answer img").attr('class')=="scissors"){
                        $(".check").html("YOU WIN");
                        score++;
                    }
                    // If you choose paper
                    if($(".your-answer img").attr('class') == "paper" && 
                    $(".computer-answer img").attr('class')=="scissors"){

                        $(".check").html("YOU LOSE");

                    }else if($(".your-answer img").attr('class') == "paper" &&
                     $(".computer-answer img").attr('class')=="rock"){
                        $(".check").html("YOU WIN");
                        score++;
                    } 
                    
                    //If you choose scissors
                    if($(".your-answer img").attr('class') == "scissors" && 
                    $(".computer-answer img").attr('class')=="rock"){

                        $(".check").html("YOU LOSE");

                    }else if($(".your-answer img").attr('class') == "scissors" &&
                     $(".computer-answer img").attr('class')=="paper"){
                        $(".check").html("YOU WIN");
                        score++;
                    }                    
                    $(".score").html(score);

                }




        } , 1500)
        

     });
}
$("button").click(()=>{
    if($(".check").html() == "YOU LOSE"){
        score = 0 ;
    }

    $(".again").css("display" , "none")
    $(".answer").css("display" , "none")
    $(".icons").css("display" , "flex");
    $(".your-answer img").remove();
    $(".computer-answer img").remove();
    $(".score").html(score);
    $(".computer-answer").removeClass("background");
    $(".computer-answer").addClass("background2");


})

$(".RULES").click( ()=>{
    $(".rules").css("display" , "flex")
});


$(".close").click( ()=>{
    $(".rules").css("display" , "none");
})           

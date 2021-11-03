var p1score = 0;
var p2score = 0;
var tie = 0;
var turn = 1;

function checkWin(){
   if ($(".row-1 .box.x").length === 3){
    console.log("working")
   }
   if ($(".row-2 .box.x").length === 3){
       console.log("working2")
   }
   if ($(".row-3 .box.x").length === 3){
       console.log("working3")
   }
   if ($(".col-1.x").length === 3){
    console.log("working")
    }
    if ($(".col-2.x").length === 3){
    console.log("working")
    }
    if ($(".col-3.x").length === 3){
    console.log("working")
    }
    if($("#1").hasClass("x")
   && $("#5").hasClass("x") 
   && $("#9").hasClass("x"))
   {
       console.log("Working")
   }
   if($("#3").hasClass("x")
   && $("#5").hasClass("x")
   && $("#7").hasClass("x"))
   {
       console.log("Working")
   }

   if ($(".row-1 .box.o").length === 3){
    console.log("working")
   }
   if ($(".row-2 .box.o").length === 3){
       console.log("working2")
   }
   if ($(".row-3 .box.o").length === 3){
       console.log("working3")
   }
   if ($(".col-1.o").length === 3){
    console.log("working")
    }
    if ($(".col-2.o").length === 3){
    console.log("working")
    }
    if ($(".col-3.o").length === 3){
    console.log("working")
    }
    if($("#1").hasClass("o")
   && $("#5").hasClass("o") 
   && $("#9").hasClass("o"))
   {
       console.log("Working")
   }
   if($("#3").hasClass("o")
   && $("#5").hasClass("o")
   && $("#7").hasClass("o"))
   {
       console.log("Working")
   }

}

$(".box").click(function(){
    if(turn === 1){
        $(this).text("x")
        $(this).addClass("x") 
        turn = 2;
        $("#turn").text(2)
        checkWin();
    }
    else 
    {
        $(this).text("o")
        $(this).addClass("o")
        turn = 1;
        $("#turn").text(1)
        checkWin();
    }
})
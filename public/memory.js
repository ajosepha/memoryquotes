$(document).ready(function(){
  var $this = $(this);
  var matches = [];
  var $cards = $(".card.col6");


    $("div.card").on("click", function(event) {
      if (!$(this).hasClass("disabled") ){
        $(this).addClass("chosen");
        $(this).find(".value").fadeOut();
        $(this).find(".question").fadeIn();
        matches.push($(this).find(".answer").text().trim());
        
        if (matches[0]===matches[1]){
          $cards.filter(".disabled").addClass("played")
          $(this).addClass("played")
          //$cards.filter(".disabled").removeClass("disabled").removeClass("question")
          matches.pop()
          matches.pop()
          alert("you got a match!")
        }
        else if(matches.length===2 && matches[0] !== matches[1]){
          $(this).addClass("disabled");
          $cards.filter(".disabled").find(".value")
          //.fadeIn().find(".question").fadeOut()
          $cards.filter(".disabled").removeClass("chosen")
          alert(2)
          // matches.pop()
          // matches.pop()
        }
        else if(matches.length ===1 ){
          $(this).addClass("disabled");
          alert("1")
        }
        else if(matches.length === 3){
          $cards.filter(".disabled").find(".value").fadeIn();
          $cards.filter(".disabled").find(".question").fadeOut();
          $cards.filter(".disabled").removeClass("disabled")
          matches.pop()
          matches.pop()
          matches.pop()
          //.find(".question")
          //.fadeOut().addClass("value").fadeIn().removeClass(".question");
        
        }
        // else {
        //   $(this).find(".question").fadeOut();
        //    $(this).siblings().not(".cat-card").removeClass("disabled");
        // }
         
    


     
       

       //.find(".question").fadeOut()

        //$cards.filter(".disabled and chosen").remove disabled remove chosen fade in
        //fade out value
        // else{
        //   //$(this).removeClass("disabled");
        //   //$cards.filter(".disabled").addClass(".value")
        //   matches.pop()
        //   matches.pop()

        // }
      
        
    }});
});
// $(document).ready(function(){

//     var $this = $(this);
  
//   //toggle text
//   $("div.card").on("click", function(event) {
//       if (!$(this).hasClass("disabled")){
//         alert("hi")}
//         // ;
//         // ;
//         // $(this).addClass("disabled");
//         //save card
//         //if no match, removed disabled
//         //if yes match, then do something else, ie win case
//     }
//   });
  
//   //make + and - buttons work
// });


//logic
//if 
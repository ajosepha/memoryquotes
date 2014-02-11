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
        $(this).addClass("disabled");
        if (matches[0]===matches[1]){
          $cards.filter(".disabled").addClass("played")
          $cards.filter(".disabled").removeClass("disabled")
          matches.pop()
          matches.pop()
          alert(matches)
        }
        else if(matches.length===2 && matches[0] !== matches[1]){
          $cards.filter(".disabled").find(".value")
          //.fadeIn().find(".question").fadeOut()
          alert("hi")
          $cards.filter(".disabled").removeClass("disabled").removeClass("chosen")
        }

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
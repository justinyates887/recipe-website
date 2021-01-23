//Scripts
M.AutoInit();
$('.chips').chips();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });


var chipsData = M.Chips.getInstance($('.chips')).chipsData;
var chipsDataJson = JSON.stringify(chipsData); 


  
$("#search").on("click", function(event) {
  event.preventDefault();

  // Puts data from chips into objects in an array
  var instance = M.Chips.getInstance($(".chips"));
  var ingredientEntered = instance.chipsData;
  


});


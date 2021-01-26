//Scripts


const tags = document.querySelectorAll(".chips");
    M.Chips.init(tags, {
      data: [{
        tag: "ingredient 1",
      },{
        tag: "ingredient 2"
      }]
    });

    const tag_holder = document.querySelectorAll(".chips-placeholder");
    M.Chips.init(tag_holder, {
      placeholder: "Enter ingredients"
    })

    /*******************************************************Unsplash API ************************************************************************/
    /*
    const unsplashKey = 'IhPp4I1zglZsS5HfUmls4CF3gKJxuuBPeKVPwWEQmeo';
    let recipe = $(``).val();
    let queryURL = `https://api.unsplash.com/photos/?query=${recipe}&client_id=${unsplashKey}`;
    const carousel = document.querySelector('');

    async function getRecipeImages() {
      return fetch(queryURL)
        .then((response) => response.json())
        .then((data) => {
          let image1 = data.results[0];
          return image.urls.regular;
        })
    }
    */
    /********************************************************************************************************************************************/


    
    /*******************************************************Bookmark API*********************************************************************/
    /*
    $('#bookmark').on('click', function(event) {
      var createBookmark = browser.bookmarks.create({
        title: "", //set title of recipie here
        url: "" //set url to recipie here
      });
    });
    */
    /********************************************************************************************************************************************/
M.AutoInit();
$('.chips').chips();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });


var chipsData = M.Chips.getInstance($('.chips')).chipsData;
var chipsDataJson = JSON.stringify(chipsData); 


  
// $("#search").on("click", function(event) {
//   event.preventDefault();

//   // Puts data from chips into objects in an array
//   var instance = M.Chips.getInstance($(".chips"));
//   var ingredientEntered = instance.chipsData;

$(document).ready(function(){
 
 
  function getRecipe(res){
   console.log(res)
  var hits = res.hits;
    for(i=0;i<hits.length; i++){
      var ul = $("<ul></ul>").attr("id", "recipe-list").addClass("collapsible z-depth-3")
      var li = $("<li></li>").attr("id", "recipe-name")
      var title = $("<div></div>").attr("id","recipe-title").addClass("collapsible-header").text(hits[i].recipe.label)
      var recBody = $("<div></div>").addClass("collapsible-body center-align")
      var recLink = $("<a></a>").attr("target","_blank").attr("href", hits[i].recipe.url).text("Click for full recipe")
      var inglines =$("<ul></ul>").text("Ingredients: ");
      var ing_li =res.hits[0].recipe.ingredientLines
      
      for(j=0; j<ing_li.length;j++){
        var ing = $("<li></li>").text(ing_li[j])
          $(inglines).append(ing)
      }
      var imgDiv = $("<div></div>").attr("id","img-div")
      var img = $("<img>").attr("src", hits[i].recipe.image).attr("alt","recipe-image").addClass("responsive-img")
      var saveIcon = $("<i></i>").addClass("material-icons right").text("save")
      var saveButton = $("<button></button>").text("Save Recipe").addClass("waves-effect waves-light btn teal lighten-1").append(saveIcon)
      var nutriBtn = $("<button></button>").attr("data-target","nutrition-info").addClass("waves-effect waves-light btn modal-trigger pink").text("Nutrition-info")
      var nutriIcon = $("<i></i>").addClass("material-icons right").text("menu_book")
      $(nutriBtn).append(nutriIcon)
      $(imgDiv).append(img)
      $(recBody).append(recLink,inglines,imgDiv,saveButton,nutriBtn)
      $(li).append(title,recBody)
      $(ul).append(li)
     $("#recipe-results").prepend(ul)
      $(".collapsible").collapsible()
      $('.modal').modal();
    }
    }
   
   function getNutrition(res){
      var hit = res.hits
      for(i=0;i<hit.length; i++){
        var calcVal = $("#calc-val").text(parseInt(hit[i].recipe.totalDaily.CA.quantity))
      $("#calcium").append(calcVal) 
      var carbsVal= $("#carbs-val").text(parseInt(hit[i].recipe.totalDaily.CHOCDF.quantity))
      $("#carbs").append(carbsVal);
      var cholestrolVal = $("#cholestrol-val").text(parseInt(hit[i].recipe.totalDaily.CHOLE.quantity))
      $("#cholestrol").append(cholestrolVal)
      var fatVal = $("#fat-val").text(parseInt(hit[i].recipe.totalDaily.FAT.quantity))
      $("#fat").append(fatVal)
      var potassiumVal = $("#potassium-val").text(parseInt(hit[i].recipe.totalDaily.K.quantity))
      $("#potassium").append(potassiumVal)
      var magnesiumVal = $("#magnesium-val").text(parseInt(hit[i].recipe.totalDaily.MG.quantity))
      $("#magnesium").append(magnesiumVal)
      var sodiumVal = $("#sodium-val").text(parseInt(hit[i].recipe.totalDaily.NA.quantity))
      $("#sodium").append(sodiumVal)
      var ironVal = $("#iron-val").text(parseInt(hit[i].recipe.totalDaily.FE.quantity))
      $("#iron").append(ironVal)
      var fiberVal= $("#fiber-val").text(parseInt(hit[i].recipe.totalDaily.FIBTG.quantity))
      $("#fiber").append(fiberVal)
      }
    }
 
    
    
    $("#search").on("click", function(e){
        e.preventDefault()
        $("#recipe-results").empty()
        ingredients = $("#ing-input").text().trim().toString().split("close").toString()
        console.log(ingredients)
        var query_url = "https://api.edamam.com/search?q="+ingredients+"&app_id=914eaa27&app_key=43cf2ff17cfeb099d1da941100537c64"
        $.ajax({url:query_url, method:"GET"}).done(function(res){
        //  console.log(res)
        getNutrition(res)
        getRecipe(res)
        
         })
      })
      
  }) 
;



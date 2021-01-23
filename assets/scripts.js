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
      var ul = $("<ul></ul>").attr("id", "recipe-list").addClass("collapsible")
      var li = $("<li></li>").attr("id", "recipe-name").addClass("active")
      var title = $("<div></div>").attr("id","recipe-title").addClass("collapsible-header text-center").text(res.hits[0].recipe.label)
      var img = $("<img>").attr("src", res.hits[1].recipe.image).addClass("text-center")
      $(li).append(title,img)
      $(ul).append(li)
      $("#recipe-results").prepend(ul)
      
     }
     $(".collapsible").collapsible();
      $("#search").on("click", function(e){
            e.preventDefault()
           ingredients = $("#ing-input").text().trim().toString().split("close").toString()
           console.log("clicked")
          console.log(ingredients)
          var query_url = "https://api.edamam.com/search?q="+ingredients+"&app_id=914eaa27&app_key=43cf2ff17cfeb099d1da941100537c64"
          $.ajax({url:query_url, method:"GET"}).done(function(res){
          //  console.log(res)
          getRecipe(res)
           })
        })
        
    }) 
;

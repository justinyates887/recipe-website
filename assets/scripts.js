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
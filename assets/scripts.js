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
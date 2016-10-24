$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    var groceries = ["item1", "item2", "item3", "item4"];
    var groceryInput = [];

    groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      groceryInput.push(userInput);
      groceryInput.sort();
    });

    console.log(groceryInput);

    var output = groceryInput.map(function(item) {
      return item.toUpperCase();
      ("." + item).append(output);
    });

    $
    $("#list").show();
    $("form").hide();


  });

});
//
// push
// sort
// new function
// uppercase
//
// append

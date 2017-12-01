$(() => {

  $("#userinput").on("click", () => {
    var destination = document.getElementById("autocomplete");
    console.log(destination)

  });


  $("#restaurantbutton").on("click", () => {
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?',
      method: 'GET',
      contentType: 'application/json; charset=UTF-8',
      data: {
        query: "paris",
        key: "AIzaSyCWJZA2SqBF8AFk_GpwBtj3vTbNnlEUMsk",
      },
      success: function (data) {
        var restaurants = document.getElementById("restaurantdescription");
        var htmlString = data.results[0].name;
        restaurants.insertAdjacentHTML('beforeend', htmlString)
        }
      })
    });
  });

$(() => {

  $("#userinput").on("click", () => {
    var destination = document.getElementById("autocomplete");
    console.log(destination)

  });

  $(".form-check-input").click(function(){
    $("#news").append(" <b>Appended text</b>.");
  });



  $("#restaurantbutton").on("click", () => {
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?',
      method: 'GET',
      contentType: 'application/json; charset=UTF-8',
      data: {
        query: "paris",
        key: "AIzaSyCWJZA2SqBF8AFk_GpwBtj3vTbNnlEUMsk",
        types: "restaurant",
      },
      success: function (data) {
        var header = document.getElementById("titlebutton");
        var htmlString5 = "Restaurants"
        header.insertAdjacentHTML('beforeend', htmlString5)

        var restaurants1 = document.getElementById("restaurantname1");
        var htmlString1 = data.results[0].name;
        restaurants1.insertAdjacentHTML('beforeend', htmlString1)

        var restaurantsd1 = document.getElementById("restaurantdescription");
        var htmlString = "";
          htmlString += "<p>This restaurant is located at " + data.results[0].formatted_address + ". It is rated a " + data.results[0].rating + " out of 5 by other travellers.</p>"
        restaurantsd1.insertAdjecentHTML('beforeend', htmlString)

        var restaurants2 = document.getElementById("restaurantname2");
        var htmlString2 = data.results[1].name;
        restaurants2.insertAdjacentHTML('beforeend', htmlString2)

        var restaurantsd2 = document.getElementById("restaurantdescription");
        var htmlString = "";
          htmlString += "<p>This restaurant is located at " + data.results[1].formatted_address + ". It is rated a " + data.results[1].rating + " out of 5 by other travellers.</p>"
        restaurantsd1.insertAdjacentHTML('beforeend', htmlString)

        var restaurants3 = document.getElementById("restaurantname3");
        var htmlString3 = data.results[2].name;
        restaurants3.insertAdjacentHTML('beforeend', htmlString3)

        var restaurantsd3 = document.getElementById("restaurantdescription");
        var htmlString = "";
          htmlString += "<p>This restaurant is located at " + data.results[2].formatted_address + ". It is rated a " + data.results[2].rating + " out of 5 by other travellers.</p>"
        restaurantsd3.insertAdjacentHTML('beforeend', htmlString)

        var restaurants4 = document.getElementById("restaurantname4");
        var htmlString4 = data.results[3].name;
        restaurants4.insertAdjacentHTML('beforeend', htmlString4)

        var restaurantsd4 = document.getElementById("restaurantdescription");
        var htmlString = "";
          htmlString += "<p>This restaurant is located at " + data.results[3].formatted_address + ". It is rated a " + data.results[3].rating + " out of 5 by other travellers.</p>"
        restaurantsd4.insertAdjacentHTML('beforeend', htmlString)
        }
      })
    });
  });

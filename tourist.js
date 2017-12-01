$(() => {
  var desetination="destination"
  $("#userinput").on("click", () => {
    destination = document.getElementById("autocomplete").value;
    console.log(destination)

  });


  $("#restaurantbutton").on("click", () => {
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?',
      method: 'GET',
      contentType: 'application/json; charset=UTF-8',
      data: {
        query: "paris",
        key: "AIzaSyC58JA81ZluYN1WxVelklAOv7lOITKsj5o",
        types: "restaurant",
      },
      success: function (data) {
        var header = document.getElementById("titlebutton");
        var htmlString1 = "Restaurants"
        header.insertAdjacentHTML('beforeend', htmlString1);

        var restaurants1 = document.getElementById("name1");
        var htmlString2 = data.results[0].name;
        restaurants1.insertAdjacentHTML('beforeend', htmlString2);

        var restaurantsd1 = document.getElementById("description1");
        var htmlString21 = "";
          htmlString21 += "<p>This restaurant is located at " + data.results[0].formatted_address + ". It is rated a " + data.results[0].rating + " out of 5 by other travellers.</p>"
        restaurantsd1.insertAdjacentHTML('beforeend', htmlString21);

        var restaurants2 = document.getElementById("name2");
        var htmlString3 = data.results[1].name;
        restaurants2.insertAdjacentHTML('beforeend', htmlString3);

        var restaurantsd2 = document.getElementById("description2");
        var htmlString31 = "";
          htmlString31 += "<p>This restaurant is located at " + data.results[1].formatted_address + ". It is rated a " + data.results[1].rating + " out of 5 by other travellers.</p>"
        restaurantsd2.insertAdjacentHTML('beforeend', htmlString31);

        var restaurants3 = document.getElementById("name3");
        var htmlString4 = data.results[2].name;
        restaurants3.insertAdjacentHTML('beforeend', htmlString4);

        var restaurantsd3 = document.getElementById("description3");
        var htmlString41 = "";
          htmlString41 += "<p>This restaurant is located at " + data.results[2].formatted_address + ". It is rated a " + data.results[2].rating + " out of 5 by other travellers.</p>"
        restaurantsd3.insertAdjacentHTML('beforeend', htmlString41);

        var restaurants4 = document.getElementById("name4");
        var htmlString5 = data.results[3].name;
        restaurants4.insertAdjacentHTML('beforeend', htmlString5);

        var restaurantsd4 = document.getElementById("description4");
        var htmlString51 = "";
          htmlString51 += "<p>This restaurant is located at " + data.results[3].formatted_address + ". It is rated a " + data.results[3].rating + " out of 5 by other travellers.</p>"
        restaurantsd4.insertAdjacentHTML('beforeend', htmlString51);
        }
      })
    });

    $("#cafebutton").on("click", () => {
      $.ajax({
        url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?',
        method: 'GET',
        contentType: 'application/json; charset=UTF-8',
        data: {
          query: "paris",
          key: "AIzaSyC58JA81ZluYN1WxVelklAOv7lOITKsj5o",
          types: "cafe",
        },
        success: function (data) {
          var header = document.getElementById("titlebutton");
          var htmlString6 = "Cafés"
          header.insertAdjacentHTML('beforeend', htmlString6);

          var bars1 = document.getElementById("name1");
          var htmlString7 = data.results[0].name;
          bars1.insertAdjacentHTML('beforeend', htmlString7);

          var barsd1 = document.getElementById("description1");
          var htmlString71 = "";
            htmlString71 += "<p>This bar is located at " + data.results[0].formatted_address + ". It is rated a " + data.results[0].rating + " out of 5 by other travellers.</p>"
          barsd1.insertAdjacentHTML('beforeend', htmlString71);

          var bars2 = document.getElementById("name2");
          var htmlString8 = data.results[1].name;
          bars2.insertAdjacentHTML('beforeend', htmlString8);

          var barsd2 = document.getElementById("description2");
          var htmlString81 = "";
            htmlString81 += "<p>This bar is located at " + data.results[1].formatted_address + ". It is rated a " + data.results[1].rating + " out of 5 by other travellers.</p>"
          barsd2.insertAdjacentHTML('beforeend', htmlString81);

          var bars3 = document.getElementById("name3");
          var htmlString9 = data.results[2].name;
          bars3.insertAdjacentHTML('beforeend', htmlString9);

          var barsd3 = document.getElementById("description3");
          var htmlString91 = "";
            htmlString91 += "<p>This bar is located at " + data.results[2].formatted_address + ". It is rated a " + data.results[2].rating + " out of 5 by other travellers.</p>"
          barsd3.insertAdjacentHTML('beforeend', htmlString91);

          var bars4 = document.getElementById("name4");
          var htmlString10 = data.results[3].name;
          bars4.insertAdjacentHTML('beforeend', htmlString10);

          var barsd4 = document.getElementById("description4");
          var htmlString101 = "";
            htmlString101 += "<p>This bar is located at " + data.results[3].formatted_address + ". It is rated a " + data.results[3].rating + " out of 5 by other travellers.</p>"
          barsd4.insertAdjacentHTML('beforeend', htmlString101);
          }
        })
      });

      $("hotelbutton").on("click", () => {
        $.ajax({
          url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?',
          method: 'GET',
          contentType: 'application/json; charset=UTF-8',
          data: {
            query: "paris",
            key: "AIzaSyC58JA81ZluYN1WxVelklAOv7lOITKsj5o",
            types: "hotels",
          },
          success: function (data) {
            var header = document.getElementById("titlebutton");
            var htmlString12 = "Hotels"
            header.insertAdjacentHTML('beforeend', htmlString12);

            var hotels1 = document.getElementById("name1");
            var htmlString13 = data.results[0].name;
            hotels1.insertAdjacentHTML('beforeend', htmlString13);

            var hotelsd1 = document.getElementById("description1");
            var htmlString131 = "";
              htmlString131 += "<p>This hotel is located at " + data.results[0].formatted_address + ". It is rated a " + data.results[0].rating + " out of 5 by other travellers.</p>"
            hotelsd1.insertAdjacentHTML('beforeend', htmlString131);

            var hotels2 = document.getElementById("name2");
            var htmlString14 = data.results[1].name;
            hotels2.insertAdjacentHTML('beforeend', htmlString14);

            var hotelsd2 = document.getElementById("description2");
            var htmlString141 = "";
              htmlString141 += "<p>This hotel is located at " + data.results[1].formatted_address + ". It is rated a " + data.results[1].rating + " out of 5 by other travellers.</p>"
            hotelsd2.insertAdjacentHTML('beforeend', htmlString141);

            var hotels3 = document.getElementById("name3");
            var htmlString15 = data.results[2].name;
            hotels3.insertAdjacentHTML('beforeend', htmlString15);

            var hotelsd3 = document.getElementById("description3");
            var htmlString151 = "";
              htmlString151 += "<p>This hotel is located at " + data.results[2].formatted_address + ". It is rated a " + data.results[2].rating + " out of 5 by other travellers.</p>"
            hotelsd3.insertAdjacentHTML('beforeend', htmlString151);

            var hotels4 = document.getElementById("name4");
            var htmlString16 = data.results[3].name;
            museums4.insertAdjacentHTML('beforeend', htmlString16);

            var hotels4 = document.getElementById("description4");
            var htmlString161 = "";
              htmlString161 += "<p>This hotel is located at " + data.results[3].formatted_address + ". It is rated a " + data.results[3].rating + " out of 5 by other travellers.</p>"
            hotelsd4.insertAdjacentHTML('beforeend', htmlString161);
            }
          })
        });
  });

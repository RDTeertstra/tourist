$(() => {


  $("#userinput").on("click", () => {
    document.getElementById("des").innerHTML = "";
    var usercity = document.getElementById("des");
    var destination = document.getElementById("autocomplete").value;
    usercity.insertAdjacentHTML('beforeend', destination);
  });

  $(".form-check-input").click(function(){
    $("#news").append(" <b>Appended text</b>.");
  });

  //Smoothscrolling

  $("#userinput").click(function () {
    $('html,body').animate({
        scrollTop: $("#page2").offset().top},'slow');
  });

  $("#restaurantbutton").click(function () {
    $('html,body').animate({
        scrollTop: $("#items").offset().top},'slow');
  });

  $("#cafebutton").click(function () {
      $('html,body').animate({
          scrollTop: $("#items").offset().top},'slow');
  });

  $("#museumbutton").click(function () {
      $('html,body').animate({
          scrollTop: $("#items").offset().top},'slow');
  });


  $("#restaurantbutton").on("click", () => {
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?',
      method: 'GET',
      contentType: 'application/json; charset=UTF-8',
      data: {
        query: document.getElementById("autocomplete").value,
        key: "AIzaSyB-LDq2UPeSay8YufFF3Y-Mi93HVQQw1aU",
        types: "restaurant",
      },
      success: function (data) {
        document.getElementById("titlebutton").innerHTML = "";
        var header = document.getElementById("titlebutton");
        var htmlString1 = "Restaurants"
        header.insertAdjacentHTML('beforeend', htmlString1);

        document.getElementById("name1").innerHTML = "";
        var restaurants1 = document.getElementById("name1");
        var htmlString2 = data.results[0].name;
        restaurants1.insertAdjacentHTML('beforeend', htmlString2);

        document.getElementById("description1").innerHTML = "";
        var restaurantsd1 = document.getElementById("description1");
        var htmlString21 = "";
          htmlString21 += "<p>This restaurant is located at " + data.results[0].formatted_address + ". It is rated a " + data.results[0].rating + " out of 5 by other travellers.</p>"
        restaurantsd1.insertAdjacentHTML('beforeend', htmlString21);

        document.getElementById("name2").innerHTML = "";
        var restaurants2 = document.getElementById("name2");
        var htmlString3 = data.results[1].name;
        restaurants2.insertAdjacentHTML('beforeend', htmlString3);

        document.getElementById("description2").innerHTML = "";
        var restaurantsd2 = document.getElementById("description2");
        var htmlString31 = "";
          htmlString31 += "<p>This restaurant is located at " + data.results[1].formatted_address + ". It is rated a " + data.results[1].rating + " out of 5 by other travellers.</p>"
        restaurantsd2.insertAdjacentHTML('beforeend', htmlString31);

        document.getElementById("name3").innerHTML = "";
        var restaurants3 = document.getElementById("name3");
        var htmlString4 = data.results[2].name;
        restaurants3.insertAdjacentHTML('beforeend', htmlString4);

        document.getElementById("description3").innerHTML = "";
        var restaurantsd3 = document.getElementById("description3");
        var htmlString41 = "";
          htmlString41 += "<p>This restaurant is located at " + data.results[2].formatted_address + ". It is rated a " + data.results[2].rating + " out of 5 by other travellers.</p>"
        restaurantsd3.insertAdjacentHTML('beforeend', htmlString41);

        document.getElementById("name4").innerHTML = "";
        var restaurants4 = document.getElementById("name4");
        var htmlString5 = data.results[3].name;
        restaurants4.insertAdjacentHTML('beforeend', htmlString5);

        document.getElementById("description4").innerHTML = "";
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
          query: document.getElementById("autocomplete").value,
          key: "AIzaSyB-LDq2UPeSay8YufFF3Y-Mi93HVQQw1aU",
          types: "cafe",
        },
        success: function (data) {
          document.getElementById("titlebutton").innerHTML = "";
          var header = document.getElementById("titlebutton");
          var htmlString6 = "Cafés"
          header.insertAdjacentHTML('beforeend', htmlString6);

          document.getElementById("name1").innerHTML = "";
          var bars1 = document.getElementById("name1");
          var htmlString7 = data.results[0].name;
          bars1.insertAdjacentHTML('beforeend', htmlString7);

          document.getElementById("description1").innerHTML = "";
          var barsd1 = document.getElementById("description1");
          var htmlString71 = "";
            htmlString71 += "<p>This bar is located at " + data.results[0].formatted_address + ". It is rated a " + data.results[0].rating + " out of 5 by other travellers.</p>"
          barsd1.insertAdjacentHTML('beforeend', htmlString71);

          document.getElementById("name2").innerHTML = "";
          var bars2 = document.getElementById("name2");
          var htmlString8 = data.results[1].name;
          bars2.insertAdjacentHTML('beforeend', htmlString8);

          document.getElementById("description2").innerHTML = "";
          var barsd2 = document.getElementById("description2");
          var htmlString81 = "";
            htmlString81 += "<p>This bar is located at " + data.results[1].formatted_address + ". It is rated a " + data.results[1].rating + " out of 5 by other travellers.</p>"
          barsd2.insertAdjacentHTML('beforeend', htmlString81);

          document.getElementById("name3").innerHTML = "";
          var bars3 = document.getElementById("name3");
          var htmlString9 = data.results[2].name;
          bars3.insertAdjacentHTML('beforeend', htmlString9);

          document.getElementById("description3").innerHTML = "";
          var barsd3 = document.getElementById("description3");
          var htmlString91 = "";
            htmlString91 += "<p>This bar is located at " + data.results[2].formatted_address + ". It is rated a " + data.results[2].rating + " out of 5 by other travellers.</p>"
          barsd3.insertAdjacentHTML('beforeend', htmlString91);

          document.getElementById("name4").innerHTML = "";
          var bars4 = document.getElementById("name4");
          var htmlString10 = data.results[3].name;
          bars4.insertAdjacentHTML('beforeend', htmlString10);

          document.getElementById("description4").innerHTML = "";
          var barsd4 = document.getElementById("description4");
          var htmlString101 = "";
            htmlString101 += "<p>This bar is located at " + data.results[3].formatted_address + ". It is rated a " + data.results[3].rating + " out of 5 by other travellers.</p>"
          barsd4.insertAdjacentHTML('beforeend', htmlString101);
          }
        })
      });

      $("#museumbutton").on("click", () => {
        $.ajax({
          url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?',
          method: 'GET',
          contentType: 'application/json; charset=UTF-8',
          data: {
            query: document.getElementById("autocomplete").value,
            key: "AIzaSyB-LDq2UPeSay8YufFF3Y-Mi93HVQQw1aU",
            types: "museum",
          },
          success: function (data) {
            document.getElementById("titlebutton").innerHTML = "";
            var header = document.getElementById("titlebutton");
            var htmlString12 = "Museums"
            header.insertAdjacentHTML('beforeend', htmlString12);

            document.getElementById("name1").innerHTML = "";
            var museums1 = document.getElementById("name1");
            var htmlString13 = data.results[0].name;
            museums1.insertAdjacentHTML('beforeend', htmlString13);

            document.getElementById("description1").innerHTML = "";
            var museumsd1 = document.getElementById("description1");
            var htmlString131 = "";
              htmlString131 += "<p>This museum is located at " + data.results[0].formatted_address + ". It is rated a " + data.results[0].rating + " out of 5 by other travellers.</p>"
            museumsd1.insertAdjacentHTML('beforeend', htmlString131);

            document.getElementById("name2").innerHTML = "";
            var museums2 = document.getElementById("name2");
            var htmlString14 = data.results[1].name;
            museums2.insertAdjacentHTML('beforeend', htmlString14);

            document.getElementById("description2").innerHTML = "";
            var museumsd2 = document.getElementById("description2");
            var htmlString141 = "";
              htmlString141 += "<p>This museum is located at " + data.results[1].formatted_address + ". It is rated a " + data.results[1].rating + " out of 5 by other travellers.</p>"
            museumsd2.insertAdjacentHTML('beforeend', htmlString141);

            document.getElementById("name3").innerHTML = "";
            var museums3 = document.getElementById("name3");
            var htmlString15 = data.results[2].name;
            museums3.insertAdjacentHTML('beforeend', htmlString15);

            document.getElementById("description3").innerHTML = "";
            var museumsd3 = document.getElementById("description3");
            var htmlString151 = "";
              htmlString151 += "<p>This museum is located at " + data.results[2].formatted_address + ". It is rated a " + data.results[2].rating + " out of 5 by other travellers.</p>"
            museumsd3.insertAdjacentHTML('beforeend', htmlString151);

            document.getElementById("name4").innerHTML = "";
            var museums4 = document.getElementById("name4");
            var htmlString16 = data.results[3].name;
            museums4.insertAdjacentHTML('beforeend', htmlString16);

            document.getElementById("description4").innerHTML = "";
            var museumsd4 = document.getElementById("description4");
            var htmlString161 = "";
              htmlString161 += "<p>This museum is located at " + data.results[3].formatted_address + ". It is rated a " + data.results[3].rating + " out of 5 by other travellers.</p>"
            museumsd4.insertAdjacentHTML('beforeend', htmlString161);
            }
          })
        });
  });

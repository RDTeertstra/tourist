$(() => {

  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=paris-restaurant&key=AIzaSyCVV-xcY5R-Uw0vgXyZviRxBLeGBxI1gBw',
    method: 'GET',
    contentType: 'application/json; charset=UTF-8',
    data: {
      limit: 25,
    },
    success: function handleResults(response_body){
      response_body.data.forEach(function(item) {
        var place = ac.getPlace();
        console.log(place.formatted_adress);
        console.log(place.url);
        console.log(place.geometry.location);
        text.appendTo('#restaurantdescription')
      })
    }
  });



  var ac = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
  google.maps.event.addListener(ac, 'place_changed', function(){
    var place = ac.getPlace();
    console.log(place.formatted_adress);
    console.log(place.url);
    console.log(place.geometry.location);
  });

  var ac = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),{
    types: ['establishment']
  });

/*/
  $("#userinput2").on("click", () => {
    $("#titlebutton").html("I love pizza that's why I'm fat")
  });

  $("#whatever1").on("click", () => {
    $("#spa1").html("I love pizza that's why I'm fat")
  });

$.ajax({
  url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=Berlin&key=AIzaSyCVV-xcY5R-Uw0vgXyZviRxBLeGBxI1gBw',
  method: 'GET',
  contentType: 'application/json; charset=UTF-8',
  data: {
    query: 'Berlin',
    limit: 25,
    api_key: 'AIzaSyCVV-xcY5R-Uw0vgXyZviRxBLeGBxI1gBw'
  },
  success: function handleResults(response_body){
    response_body.data.forEach(function(item) {
      console.log(item);
      var url = item.images.fixed_height_downsampled.url;
      var image = $(document.createElement('img'));
      image.attr('src', url)
      image.appendTo('#photo-container')
    })
  }
});
/*/

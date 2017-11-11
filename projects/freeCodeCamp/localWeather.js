

$(document).ready(function(){

var lon;
var lat;
var city;
var temp;
var cel;
var fahr;

  if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
  lon = position.coords.longitude;
  lat = position.coords.latitude;
//$("#data").html("latitude: " + lat + "<br>longitude: " + lon);

var api = 'https://fcc-weather-api.glitch.me/api/current?lat=' +lat+ '&lon=' +lon;

$.getJSON(api,function(data){ //JSON call for open weather API
      var city = data.name +", "+ data.sys.country;
      var cTemp = (data.main.temp).toFixed(1);
      var weatherCondition = data.weather[0].description;
      var weatherIcon = data.weather[0].icon;
      var fTemp = ((cTemp * 9 / 5) + 32).toFixed(1);
      var tempSwap = true;

      $("#city").html(city);
      $("#weatherCondition").html(weatherCondition);
      $("#weatherIcon").html(weatherIcon);
      $("#icon").attr("src",weatherIcon);

    //  $("body").css('background','url("https://cdn.pixabay.com/photo/2010/12/13/10/21/air-2716_960_720.jpg") no-repeat center top');

// temp conversion
      $("#temp").html(fTemp + " °F");
      $("#temp").click(function(){
        if(tempSwap===false){
          $("#temp").html(cTemp + " °C");
          tempSwap = true;
        }
        else{
          $("#temp").html(fTemp + " °F");
          tempSwap = false;
        }
      });
    });
});
}

});

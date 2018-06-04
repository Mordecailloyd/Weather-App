var celsiusDegree = '\u2103';
function locationLookup(){
  var positionKnown = false;
  $('.loading').removeClass('hidden');
  $('.control-panel').addClass('hidden');
    navigator.geolocation.watchPosition((position)=>{
      if (positionKnown){
        return;
      }
      positionKnown = true; //By setting bool to true before ajax async requeset there is no chance of calling it twice
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      console.log(latitude);
      console.log(longitude);
      fetchLocation(latitude,longitude);
    });
  console.log('hello world!');
}



function fetchLocation(latitude,longitude){
  $('.loading').removeClass('hidden');
  $('.control-panel').addClass('hidden');
  $.ajax({
    type: 'GET',
    success(data) {
      console.log("We have your weather!");
      console.log(data);
      weatherBackground(data.weather[0].main);
      let celsiusTemp = Math.round(data.main.temp - 273);
      $('.loading').addClass('hidden');
      $('.forecast').removeClass('hidden');
      $('.forecast').text(`Your estimated temperature is ${celsiusTemp}${celsiusDegree}`);
    },
    error() {
      console.error("An error occurred.");
    },
  });
}



function weatherBackground(weatherType){
  if (weatherType === 'Clear'){
    console.log("weatherType helper method has determined the weather to be clear.");
    $('.background-image').addClass("clear");
  }
  else if (weatherType === 'Cloudy') {
    console.log("weatherType helper method has determined the weather to be cloudy.");
    $('.background-image').addClass("cloudy");
  }
  else if (weatherType === 'Clouds') {
    console.log("weatherType helper method has determined the weather to be clouds.");
    $('.background-image').addClass("cloudy");
  }
  else if (weatherType === 'Chance of Flurries') {
    console.log("weatherType helper method has determined the weather to be chance of flurries.");
    $('.background-image').addClass("flurries");
  }
  else if (weatherType === 'Chance of Rain') {
    $('.background-image').addClass("rain");
    console.log("weatherType helper method has determined the weather to be chance of rain.");
  }
  else if (weatherType === 'Chance Rain') {
    $('.background-image').addClass("rain");
    console.log("weatherType helper method has determined the weather to be chance rain.");
  }
  else if (weatherType === 'Chance of Freezing Rain') {
    $('.background-image').addClass("freezing-rain");
    console.log("weatherType helper method has determined the weather to be chance of freezing rain.");
  }
  else if (weatherType === 'Chance of Sleet') {
    $('.background-image').addClass("sleet");
    console.log("weatherType helper method has determined the weather to be chance of sleet.");
  }
  else if (weatherType === 'Chance of Snow') {
    console.log("weatherType helper method has determined the weather to be chance of snow.");
    $('.background-image').addClass("snow");
  }
  else if (weatherType === 'Chance of Thunderstorms') {
    console.log("weatherType helper method has determined the weather to be chance of thunderstorms.");
    $('.background-image').addClass("thunderstorms");
  }
  else if (weatherType === 'Chance of a Thunderstorm') {
    console.log("weatherType helper method has determined the weather to be chance of a thunderstorm.");
    $('.background-image').addClass("thunderstorms");
  }
  else if (weatherType === 'Flurries') {
    console.log("weatherType helper method has determined the weather to be flurries.");
    $('.background-image').addClass("flurries");
  }
  else if (weatherType === 'Fog') {
    console.log("weatherType helper method has determined the weather to be fog.");
    $('.background-image').addClass("carl");
  }
  else if (weatherType === 'Haze') {
    console.log("weatherType helper method has determined the weather to be haze.");
    $('.background-image').addClass("carl");
  }
  else if (weatherType === 'Mostly Cloudy') {
    console.log("weatherType helper method has determined the weather to be mostly cloudy.");
    $('.background-image').addClass("cloudy");
  }
  else if (weatherType === 'Mostly Sunny') {
    console.log("weatherType helper method has determined the weather to be mostly sunny.");
    $('.background-image').addClass("sunny");
  }
  else if (weatherType === 'Partly Cloudy') {
    console.log("weatherType helper method has determined the weather to be partly cloudy.");
    $('.background-image').addClass("cloudy");
  }
  else if (weatherType === 'Partly Sunny') {
    console.log("weatherType helper method has determined the weather to be partly sunny.");
    $('.background-image').addClass("sunny");
  }
  else if (weatherType === 'Freezing Rain') {
    console.log("weatherType helper method has determined the weather to be freezing rain.");
    $('.background-image').addClass("rain");
  }
  else if (weatherType === 'Rain') {
    console.log("weatherType helper method has determined the weather to be rain.");
    $('.background-image').addClass("rain");
  }
  else if (weatherType === 'Sleet') {
    console.log("weatherType helper method has determined the weather to be sleet.");
    $('.background-image').addClass("sleet");
  }
  else if (weatherType === 'Snow') {
    console.log("weatherType helper method has determined the weather to be snow.");
    $('.background-image').addClass("snow");
  }
  else if (weatherType === 'Sunny') {
    $('.background-image').addClass("sunny");
    console.log("weatherType helper method has determined the weather to be sunny.");
  }
  else if (weatherType === 'Thunderstorms') {
    $('.background-image').addClass("thunderstorms");
    console.log("weatherType helper method has determined the weather to be thunderstorms.");
  }
  else if (weatherType === 'Thunderstorm') {
    $('.background-image').addClass("thunderstorms");
    console.log("weatherType helper method has determined the weather to be thunderstorm.");
  }
  else if (weatherType === 'Unknown') {
    console.log("weatherType helper method has determined the weather to be unknown.");
    $('.background-image').addClass("unknown");
  }
  else if (weatherType === 'Overcast') {
    console.log("weatherType helper method has determined the weather to be overcast.");
    $('.background-image').addClass("cloudy");
  }
  else if (weatherType === 'Scattered Clouds') {
    console.log("weatherType helper method has determined the weather to be scattered clouds.");
    $('.background-image').addClass("cloudy");
  }
  else {
    console.log("Error in weatherType helper method");
    return;
  }
}
// test

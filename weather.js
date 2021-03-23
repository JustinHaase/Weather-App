/*******************************************************/
//SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".weather-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// APP DATA
const weather = {};

weather.temperature = {
    unit : "Fahrenheit"
}

//APP CONTENTS AND VARS
const KELVIN = 273;
//API KEY
const key = "dcf230f9ec9de3db7414b60015a4b1bf";

/*******************************************************/
//getting geographic coordinates using the getCurrentPosition method using 3 callbacks: setPosition
//latitude and longitude come from setPosition
// function to check if geolocation is available

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition( setPosition, showError );
//setPosition will get the latitude and longitude coordinates
}else{
//if the geolocation is not available, this will display a message
    notificationElement.style.display = "block"
    notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation.</p>"    
}

/*******************************************************/
//SET USERS LOCATION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}
//DISPLAY ERROR IF NO LOCATION AVAILABLE
function showError(error) {
    notificationElement.style.display = "block";
    notification.innerHTML=`<p> ${error.message} </p>`;
}

/*******************************************************/

//GET WEATHER DATA FROM API
function getWeather(latitude, longitude){

    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    //get data from api by fetch, when we get a response, we want to parse that data
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })

    //then we convert temp data from Kelvin and parse out each bit of information we want
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
    //now that we have the inforamtion, we can call that inforamtion by displayWeather
        .then(function(){
            displayWeather();
        });

/*******************************************************/
//DISPLAY WEATHER TO USER INTERFACE

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}˚ <span>C</span>`;
    descElement.innerHTML = `${weather.description}`;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
/*******************************************************/

// a function to convert C to F, which is (temp * 9/5) + 32
function celsiusToFahrenheit( temperature ){
    return (temperature * 9/5) + 32;
}
tempElement.addEventListener("click", function(){
//create a function that will convert temp from C to F on click
    if(weather.temperature.value === undefined) return;
//if the temperature value is undefined, this will prevent the next functions from running
    if(weather.temperature.unit === "celsius"){
//it is identifiying whether the unit presented is in C or not, if it is        
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//it is calling the function that does the math to convert the value
        fahrenheit = Math.floor(fahrenheit);
//then, we are taking that value and ensuring it is an integer, rounding down to provide value
        tempElement.innerHTML = `${fahrenheit}˚ <span>F</span>`
//then we are inserting the value into the card with F for fahrenheit
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}˚ <span>C</span>`;
//this will change the value to celsius if it is in fahrenheit
        weather.temperature.unit = "celsius";
    }
});



//API request and response

//82005d27a116c2880c8f0fcb866998a0



    //http://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&appid=0ebf0e29926cc939f557a936228e1129



/*******************************************************/
/*******************************************************/
/*******************************************************/
/*******************************************************/


// const zipCode = prompt("Please enter your zip code");
// const zipLink = 'https://cors-anywhere.herokuapp.com/http://api.zippopotam.us/us' + parseInt(zipCode);
// var client = new XMLHttpRequest();
// client.open("GET", zipLink);
// client.onreadystatechange = function() {
//     if(client.readyState == 4) {
//         console.log();
//     };
//     if(client.readyState == 4 && client.status === 200) {
//         let zipData = JSON.parse(client.responseText);
//         const {places:
//             [{"place name": placeName, state: state, latitude: lat, longitude: lon}]
//         } = zipData;
//         dom.textContent = placeName + "," + state;
//         let request = client.open("GET", "https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=dcf230f9ec9de3db7414b60015a4b1bf");
//         console.log(request)
//     }


// }
          //zippo
//     var client = new XMLHttpRequest();
//     client.open("GET", "http://api.zippopotam.us/us/90210", true);
//     client.onreadystatechange = function() {
// if(client.readyState == 4) {
//     alert(client.responseText);
    // client.send();
}

const zipCode = prompt("Please enter your zip code");
const zipLink = 'https://cors-anywhere.herokuapp.com/http://api.zippopotam.us/us' + parseInt(zipCode);
var client = new XMLHttpRequest();
client.open("GET", zipLink);
client.onreadystatechange = function() {
    if(client.readyState == 4) {
        console.log();
    };
    if(client.readyState == 4 && client.status === 200) {
        let zipData = JSON.parse(client.responseText);
        const {places:
            [{"place name": placeName, state: state, latitude: lat, longitude: lon}]
        } = zipData;
        dom.textContent = placeName + "," + state;
        let request = client.open("GET", "https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=dcf230f9ec9de3db7414b60015a4b1bf");
        console.log(request)
    }


}
          //zippo
//     var client = new XMLHttpRequest();
//     client.open("GET", "http://api.zippopotam.us/us/90210", true);
//     client.onreadystatechange = function() {
// if(client.readyState == 4) {
//     alert(client.responseText);
    client.send();

  
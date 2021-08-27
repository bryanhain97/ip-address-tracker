import fetchIPAddress from "./fetchIPAddress";
import "leaflet/dist/leaflet";

const inputValue = document.querySelector('.header-input').value;
const submitButton = document.querySelector('.header-button');
submitButton.addEventListener('click', getData);


function getData(){
    // inputValue is either domain, or ip-address.
    const IPData = fetchIPAddress(inputValue);
    const {ip, location: {country, lat, lng, timezone, city}, isp} = IPData;
    // destructuring variable assignment for IPData object

    
}
// const lat = fetchIPAddress(IPAddress).location.lat;
// const lng = fetchIPAddress(IPAddress).location.lng;

function initMap(){
    const mapSection = document.getElementById('mapid');
    // const map = L.map(mapSection).setView[]
}
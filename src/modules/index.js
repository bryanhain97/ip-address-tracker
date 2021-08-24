import fetchIPAddress from "./fetchIPAddress";
/* is leaflet already imported? or why do I have access to map.setView ??? */

let mymap = '';

function initIndex() {
    const inputField = document.querySelector('input[type="text"]');
    const button = document.querySelector('.header-button');
    const displayIPAddress = document.querySelectorAll('.nav-elements p').childNodes[0];
    const displayIPLocation = document.querySelectorAll('.nav-elements p').childNodes[1];
    const displayIPTimezone = document.querySelectorAll('.nav-elements p').childNodes[2];
    const displayIPISP = document.querySelectorAll('.nav-elements p').childNodes[3];
    // access and manipulate text when fetching

    button.addEventListener('click', IPQuery);
    async function IPQuery(event) {
        event.preventDefault();

        const IPAddress = inputField.value;
        const { ip, location: { country, region, city, lat, lng, timezone }, isp } = await fetchIPAddress(IPAddress);
        // if Promise is resolved => variables will get declared from destructured return-object;
        displayIPLocation.innerText = `${city}, ${country}, ${region}`;
        displayIPTimezone.innerText = `UTC ${timezone}`;
        displayIPISP.innerText = `${isp}`;
        displayIPAddress.innerText = `${ip}`;

        mymap.remove;
        createMap(lat, lng);
    };

    function createMap(lat = '-15.7801', lng = '-47.9292') {
        // default values for latitude and longtitude
        mymap = L.map('mapid').setView([lat, lng], 13);


        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'at_odkDilOoGEEVIdSky4kduvgq4QM26'
        }).addTo(mymap);
    }
}
function bootMap(){
    setTimeout(() => {
        initIndex();
        createMap();
    }, 150)
}
bootMap();
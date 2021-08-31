const displays = document.querySelectorAll('.nav-display');
const ipDisplay = displays[0];
const locationDisplay = displays[1];
const timezoneDisplay = displays[2];
const ispDisplay = displays[3];
const formInput = document.querySelector('.header-input');
const formButton = document.querySelector('.header-button');
const mapSection = document.querySelector('#mapid');
const map = L.map(mapSection).setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: '/mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnJ5NG5oIiwiYSI6ImNrc3U0bmNqZTE1NnAzMXBueWw2Y2Y0cGgifQ.pOiO_jYezRu0x_l_mlw-bA'
}).addTo(map);



async function getData(IPAddress) {
    const formInputValue = IPAddress;
    const APIKey = 'at_odkDilOoGEEVIdSky4kduvgq4QM26';
    const bypassURL = 'https://cors-anywhere.herokuapp.com/';
    const URL = `${bypassURL}https://geo.ipify.org/api/v1?apiKey=${APIKey}&ipAddress=${formInputValue}`;
    const fetchData = fetch(URL)
        .then(res => res.json());
    console.log(await fetchData);
    const dataJSON = await fetchData;
    return dataJSON;
}
async function createNewMap() {
    try {
        const { ip, location: { country, city, lat, lng, timezone }, isp } = await getData(formInput.value);
        map.setView([lat, lng], 13);
        L.marker([lat, lng]).addTo(map)
            .bindPopup(`good job bryan! ${isp}`)
            .openPopup();
        ipDisplay.textContent = ip;
        locationDisplay.textContent = `${city}, ${country}`;
        timezoneDisplay.textContent = timezone;
        ispDisplay.textContent = isp;
        console.log(ip, country, city, lat, lng, timezone, isp)
    }
    catch (e) {
        alert("invalid value. try again!", e);
    }
}

formButton.addEventListener('click', e => {
    e.preventDefault();
    createNewMap();
});
// setView based on return value of getData();
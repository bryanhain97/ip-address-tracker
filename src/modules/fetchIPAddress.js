export async function fetchIPAddress(IPAddress){
    const fetchData = fetch(`https://geo.ipify.org/api/v1?apiKey=at_odkDilOoGEEVIdSky4kduvgq4QM26&ipAddress=${IPAddress}`);
    const dataJSON = await fetchData.then(data => data.json());

    return dataJSON;
}

/* sample: 

fetchIPAddress('8.8.8.8')
=> {
    "ip": "8.8.8.8",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 37.40599,
        "lng": -122.078514,
        "postalCode": "94043",
        "timezone": "-07:00",
        "geonameId": 5375481
    },
    "domains": [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn"
    ],
    "as": {
        "asn": 15169,
        "name": "Google LLC",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    }
}

*/
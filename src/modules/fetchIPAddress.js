export async function fetchIPAdress(IPAddress){
    try {
        const APIKey = 'at_odkDilOoGEEVIdSky4kduvgq4QM26'; // valid for 1000 requests
        const IPData = await fetch(`https://geo.ipify.org/api/v1?apiKey=${APIKey}&ipAddress=${IPAddress}`);
        const IPDataJSON = await IPData.json();

        return IPDataJSON;
    }catch(error){
        alert("couldn't fetch data", error);
    }
}
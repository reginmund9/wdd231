const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#temp-desc");
const highTemp = document.querySelector("#high");
const lowTemp = document.querySelector("#low");
const humidity = document.querySelector("#humidity");

const mykey = "82b9407b7b6d113e077d354c4b29fe74";
const myLat = "-21.521383";
const myLong = "-64.728096";


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${mykey}&units=imperial`;

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data); // Uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    highTemp.innerHTML = `${data.main.temp_max}&deg;F`;
    lowTemp.innerHTML = `${data.main.temp_min}&deg;F`;
    humidity.innerHTML = `${data.main.humidity}%`;
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");
    captionDesc.textContent = `${desc}`;
}

apiFetch();

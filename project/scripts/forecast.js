const forecastContainer = document.querySelector("#forecast-container");



const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-21.40227954422257&lon=-64.73662852842976&appid=82b9407b7b6d113e077d354c4b29fe74&units=imperial`;

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing
            displayForecast(data); // Display forecast data
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    const forecastList = data.list; // List of forecast data
    let forecastHTML = ''; // Initialize empty HTML string for forecast

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set hours to midnight for accurate comparison

    // Initialize a counter to keep track of the number of forecasted days
    let forecastedDays = 0;

    // Loop through forecast data
    for (let i = 0; i < forecastList.length; i++) {
        const forecast = forecastList[i]; // Get forecast data for the specific time

        // Extract date and temperature information from the forecast data
        const forecastDate = new Date(forecast.dt * 1000); // Convert timestamp to Date object
        const forecastTemp = forecast.main.temp;

        // Check if the forecast date is within the next three days
        if (forecastDate > today && forecastDate.getHours() === 12) {
            // Format the date for display
            const formattedDate = forecastDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

            // Add forecast information to the HTML string
            forecastHTML += `<div class="forecast-item"><p>${formattedDate}= ${forecastTemp} &deg;F</p></div>`;

            // Increment the counter for forecasted days
            forecastedDays++;

            // Break the loop if we have forecasted for three days
            if (forecastedDays === 3) {
                break;
            }
        }
    }

    // Update the forecast container with the generated HTML
    forecastContainer.innerHTML = forecastHTML;
}


fetchForecast(); // Fetch and display the forecast data
const fetch = require('node-fetch'); // Ensure you have node-fetch installed


exports.handler = async (event) => {
    const { city } = JSON.parse(event.body);

    const apiKey = '52e1dd7b13d743f1b8f125650241610';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch weather data' }),
        };
    }
};

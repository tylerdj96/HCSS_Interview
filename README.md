# Getting Started

From the console, run:

```
npm install
npm start
```

in a different console window, run

```
npm run api
```

# Instructions

Create an application that shows weather and wind data for a chosen city:

1. When the user opens the website, load a list of cities using the fetchCities function from api.ts
2. When the cities are done loading, display them on the page
3. When the user selects a city, load the weather data using the fetchWeather function from api.ts
  - When any request is made, display some sort of loading state for the user until the data is successfully loaded
4. When the weather data is done loading, show the weather description and wind information

Notes:
Feel free to ask any questions
Don't worry about CSS
Don't worry about typescript, you can use `any` if any errors come up
It's okay to use google

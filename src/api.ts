interface City {
  id: number;
  name: string;
}

export const fetchCities = async () => {
  const response = await fetch("http://localhost:3001/cities");
  const data = await response.json();
  return data as City[];
};

interface WeatherResponse {
  weather: Array<{ id: number; main: string; description: string }>;
  wind: { speed: number; deg: number; gust?: number };
}
export const fetchWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ddc2e96719b82199e7afa00fbc0ae071`
  );
  const data = await response.json();
  return data as WeatherResponse;
};

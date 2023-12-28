import { useState } from 'react';

const useGetWeatherData = () => {
  const [loading, setLoading] = useState(false);

  const getCityCoordinates = async (city) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},tr&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getWeatherData = async (city) => {
    try {
      setLoading(true);
      const res = await getCityCoordinates(city);
      const { lat, lon } = res[0];

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await response.json();
      data.cityName = res[0].name;
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getWeatherData };
};

export default useGetWeatherData;

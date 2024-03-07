import React, { useState, useEffect } from 'react';
import './weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
 

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/188409?apikey=o4mCvH2NUAVS0iGQbxSmKZ3l6aiTdf5A&language=en-us&details=false&metric=false`);
        const data = await response.json();
      
        setWeatherData(data.DailyForecasts);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className='flex'>
      {weatherData && weatherData.map((day, index) => (
        <div className="weat" key={index}>DAY {index + 1} {day.Day.IconPhrase}  </div>
      ))}
      
    </div>
  );
};

export default Weather;

import React, { lazy, Suspense } from 'react';

const CurrentWeather = lazy(() => import('./CurrentWeather'));
const Forecast = lazy(() => import('./Forecast'));

const WeatherApp = () => (
  <div>
    <h2>Project 3: Lazy Loaded Weather App</h2>
    <Suspense fallback={<p>Loading Current Weather...</p>}>
      <CurrentWeather />
    </Suspense>
    <Suspense fallback={<p>Loading Forecast...</p>}>
      <Forecast />
    </Suspense>
  </div>
);

export default WeatherApp;

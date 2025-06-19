// App.jsx
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';

import Dashboard from './components/Project1/Dashboard';
import ImageGallery from './components/Project2/ImageGallery';
import WeatherApp from './components/Project3/WeatherApp';
import ProductPage from './components/Project4/ProductPage';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>

      <hr />

      <ErrorBoundary>
        <ImageGallery />
      </ErrorBoundary>

      <hr />

      <ErrorBoundary>
        <WeatherApp />
      </ErrorBoundary>

      <hr />

      <ErrorBoundary>
        <ProductPage />
      </ErrorBoundary>
    </div>
  );
};

export default App;

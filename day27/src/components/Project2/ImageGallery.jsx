import React, { lazy, Suspense } from 'react';

const Gallery = lazy(() => import('./Gallery'));

const ImageGallery = () => (
  <div>
    <h2>Project 2: Lazy Loaded Image Gallery</h2>
    <Suspense fallback={<p>Loading Gallery...</p>}>
      <Gallery />
    </Suspense>
  </div>
);

export default ImageGallery;

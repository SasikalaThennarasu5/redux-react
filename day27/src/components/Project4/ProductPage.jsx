import React, { lazy, Suspense } from 'react';

const ProductDetails = lazy(() => import('./ProductDetails'));
const Reviews = lazy(() => import('./Reviews'));
const Suggestions = lazy(() => import('./Suggestions'));

const ProductPage = () => (
  <div>
    <h2>Project 4: Lazy Loaded Product Page</h2>
    <Suspense fallback={<p>Loading Product Details...</p>}>
      <ProductDetails />
    </Suspense>
    <Suspense fallback={<p>Loading Reviews...</p>}>
      <Reviews />
    </Suspense>
    <Suspense fallback={<p>Loading Suggestions...</p>}>
      <Suggestions />
    </Suspense>
  </div>
);

export default ProductPage;

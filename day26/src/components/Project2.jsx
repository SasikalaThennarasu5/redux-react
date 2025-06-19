import React, { useEffect, useState } from 'react';

const ProductCard = ({ product }) => (
  <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
    <h4>{product.title}</h4>
    <img src={product.image} alt={product.title} width="50" />
    <p>${product.price}</p>
  </div>
);

const Project2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // simulate SSG (fetch once)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Project 2: Product Catalog (Simulated SSG)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Project2;

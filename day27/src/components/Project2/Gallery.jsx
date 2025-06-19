const Gallery = () => {
  const images = Array.from({ length: 6 }, (_, i) => `https://picsum.photos/200/200?random=${i + 1}`);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      {images.map((src, i) => (
        <img key={i} src={src} alt={`img-${i}`} loading="lazy" />
      ))}
    </div>
  );
};

export default Gallery;

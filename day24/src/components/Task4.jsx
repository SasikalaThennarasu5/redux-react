const FallbackUI = ({ error, resetError }) => (
  <div style={{ color: 'red' }}>
    
<h3>Something went wrong</h3>
    <p>{error.message}</p>
    <button onClick={resetError}>Retry</button>
  </div>
);

export default FallbackUI;

const NotFound: React.FC = () => {
  return (
    <div className="NotFound" style={{ textAlign: 'center', margin: '100' }}>
      <h1>404 Error</h1>
      <p>Sorry, the page you are looking for cannot be found!</p>
      <div style={{ display: 'inline-block' }}>
        <button onClick={() => window.history.back()}>Go Back</button>
        <button onClick={() => window.location.href = '/'}>Home Page</button>
      </div>
    </div>
  );
};

export const Component = NotFound;
Component.displayName = "NotFound";

export default NotFound;

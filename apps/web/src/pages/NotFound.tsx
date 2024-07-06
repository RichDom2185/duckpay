import { useNavigate } from "react-router";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center gap-y-3 h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl font-extrabold">404 Error</h1>
      <p>Sorry, the page you are looking for cannot be found!</p>
      <div className="flex gap-x-4 justify-center items-centers mx-auto">
        <button className="btn" onClick={() => window.history.back()}>
          Go Back
        </button>
        <button className="btn" onClick={() => navigate("/")}>
          Home Page
        </button>
      </div>
    </div>
  );
};

export const Component = NotFound;
Component.displayName = "NotFound";

export default NotFound;

import { useRouteError, Link } from "react-router-dom";
import Header from "../components/Header";

const ErrorPage = () => {
  const err = useRouteError();
  //console.log(err);

  return (
    <>
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-code">{err.status}</h1>
        <h2 className="error-title">{err.statusText}</h2>
        <p className="error-message">
          {err?.error?.message}
        </p>
        <button
          className="error-btn"
          onClick={() => window.location.href = "/"}
        >
          Go Back Home
        </button>
      </div>
    </div>

    </>
  );
};

export default ErrorPage;
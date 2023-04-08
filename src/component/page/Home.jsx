import { memo } from "react";
import { Link } from "react-router-dom";

export const Home = memo(() => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Homeです</h1>
        <Link to="/">go to login</Link>
      </header>
    </div>
  );
});

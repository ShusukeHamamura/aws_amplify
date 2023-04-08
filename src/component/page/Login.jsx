import { memo } from "react";
import { Link } from "react-router-dom";

export const Login = memo(() => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ログインです</h1>
        <Link to="/home">ホームへ行く</Link>
      </header>
    </div>
  );
});

import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../component/page/Home";
import { Login } from "../component/page/Login";

export const Router = memo(() => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
});

import { Routes, Route } from "react-router";
import { Home } from "./scenes/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

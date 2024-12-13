import { Routes, Route } from "react-router";
import { Home } from "./scenes/Home";
import { Note } from "./scenes/Note";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/note" element={<Note />} />
    </Routes>
  );
};

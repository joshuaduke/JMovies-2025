import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Movie from "./components/Movies/Movie.jsx";
import SignUp from "./components/Registration/SignUp.jsx";
import SignIn from "./components/Registration/SignIn.jsx";
import ProtectedRoutes from "./components/utils/ProtectedRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<App />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// import { useState, useEffect } from "react";
// import "./App.css";
// import Search from "./components/Home/Search";
// import Spinner from "./components/Home/Spinner";
// import MovieCard from "./components/Home/MovieCard";
// import { useDebounce } from "react-use";
// import { getTrendingMovies, updateSearchCount } from "./appwrite";

// const API_BASE_URL = "https://api.themoviedb.org/3";
// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const API_OPTIONS = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${API_KEY}`,
//   },
// };

import Home from "./components/Home/Home";

function App() {
  return <Home />;
}

export default App;

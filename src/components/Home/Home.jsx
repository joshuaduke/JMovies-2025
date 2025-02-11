import { useState, useEffect } from "react";
// import "./App.css";
import Search from "./Search";
import Spinner from "./Spinner";
import MovieCard from "./MovieCard";
import { useDebounce } from "react-use";
import { getTrendingMovies, updateSearchCount } from "../../appwrite";
import RecentMovies from "./TrendingMovies/RecentMovies";
import ComingSoon from "./ComingSoon/ComingSoon";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setdebounceSearchTerm] = useState("");
  const [trendingMovies, settrendingMovies] = useState([]);

  // Debounce the search term to prevent making too many API requests
  // by waiting for the user to stop typing for 500ms
  useDebounce(() => setdebounceSearchTerm(searchTerm), 500, [searchTerm]);

  const loadTrengingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      settrendingMovies(movies);
    } catch (error) {
      console.error(`Error ferch trending movies: ${error}`);
    }
  };

  useEffect(() => {
    loadTrengingMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> you&apos;ll Enjoy
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <RecentMovies searchTerm={debounceSearchTerm} />
        <ComingSoon searchTerm={debounceSearchTerm} />
      </div>
    </main>
  );
}

export default Home;

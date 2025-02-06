import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

// const data = {
//   adult: false,
//   backdrop_path: "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
//   belongs_to_collection: {
//     id: 720879,
//     name: "Sonic the Hedgehog Collection",
//     poster_path: "/fwFWhYXj8wY6gFACtecJbg229FI.jpg",
//     backdrop_path: "/l5CIAdxVhhaUD3DaS4lP4AR2so9.jpg",
//   },
//   budget: 122000000,
//   genres: [
//     {
//       id: 28,
//       name: "Action",
//     },
//     {
//       id: 878,
//       name: "Science Fiction",
//     },
//     {
//       id: 35,
//       name: "Comedy",
//     },
//     {
//       id: 10751,
//       name: "Family",
//     },
//   ],
//   homepage: "https://www.sonicthehedgehogmovie.com",
//   id: 939243,
//   imdb_id: "tt18259086",
//   origin_country: ["US"],
//   original_language: "en",
//   original_title: "Sonic the Hedgehog 3",
//   overview:
//     "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
//   popularity: 3435.809,
//   poster_path: "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
//   production_companies: [
//     {
//       id: 4,
//       logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
//       name: "Paramount Pictures",
//       origin_country: "US",
//     },
//     {
//       id: 333,
//       logo_path: "/5xUJfzPZ8jWJUDzYtIeuPO4qPIa.png",
//       name: "Original Film",
//       origin_country: "US",
//     },
//     {
//       id: 77884,
//       logo_path: "/dP2lxVNctD5Cried0IWVqgrO2o9.png",
//       name: "Marza Animation Planet",
//       origin_country: "JP",
//     },
//     {
//       id: 113750,
//       logo_path: "/A3QVZ9Ah0yI2d2GiXUFpdlbTgyr.png",
//       name: "SEGA",
//       origin_country: "JP",
//     },
//     {
//       id: 10644,
//       logo_path: "/ocLZIdYJBppuCt1rhYEb2jbpt5F.png",
//       name: "Blur Studio",
//       origin_country: "US",
//     },
//     {
//       id: 168701,
//       logo_path: "/vWdZFT4V64CCv12D10m44duQjyg.png",
//       name: "SEGA of America",
//       origin_country: "US",
//     },
//   ],
//   production_countries: [
//     {
//       iso_3166_1: "US",
//       name: "United States of America",
//     },
//     {
//       iso_3166_1: "JP",
//       name: "Japan",
//     },
//   ],
//   release_date: "2024-12-19",
//   revenue: 462549154,
//   runtime: 110,
//   spoken_languages: [
//     {
//       english_name: "English",
//       iso_639_1: "en",
//       name: "English",
//     },
//   ],
//   status: "Released",
//   tagline: "Try to keep up.",
//   title: "Sonic the Hedgehog 3",
//   video: false,
//   vote_average: 7.803,
//   vote_count: 1503,
// };

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Movie = () => {
  const [movieData, setmovieData] = useState([]);
  let { id } = useParams();
  // let id = 939243;
  console.log("Movie id", id);

  const fetchMovie = async () => {
    try {
      const endpoint = `${API_BASE_URL}/movie/${id}?language=en-US`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch Movies");
      }
      console.log(response);

      const data = await response.json();
      console.log("Movie Data fetch", data);
      setmovieData(data);
    } catch (error) {
      console.error(`Error fetching this movie ${error}`);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  console.log("Movie data final", movieData);
  console.log("Movie data final", movieData.poster_path);

  return (
    <main
      className={"text-light-100 relative bg-center bg-no-repeat bg-cover"}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieData.poster_path})`,
      }}
    >
      <section className="absolute bottom-0 ">
        <section className="bg-[rgba(100,0,0,0.5)] p-4 rounded-t-3xl">
          <div id="movie-title" className="flex flex-row justify-between">
            <h2 className="">{movieData.title}</h2>
            <img src="/movie/bookmark.svg" alt="" />
          </div>

          <div id="movie-details" className="flex flex-row justify-between">
            <ul>
              <li>Released: {movieData.release_date}</li>
              <li>Duration: {movieData.runtime}</li>

              {/* <div>
                {movieData.genres.map((genre) => (
                  <li key={genre.id} className="inline list-disc">
                    <span>{genre.name}/</span>
                  </li>
                ))}
              </div> */}
            </ul>

            <div id="movie-watched">
              <button className="bg-amber-100 font-bold py-2 px-4 rounded-lg">
                Watched
              </button>
            </div>
          </div>

          <div id="movie-rating" className="flex flex-row justify-between">
            <div>Movie Rating</div>
            <p>0/10 Rating</p>
          </div>

          <div id="movie-overview">
            <h3>Overview</h3>
            <p>{movieData.overview}</p>
          </div>

          <div id="movie-cast">
            <h3>Cast</h3>
          </div>

          {/* <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt=""
          /> */}
        </section>
      </section>
    </main>
  );
};

export default Movie;

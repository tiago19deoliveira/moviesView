/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

const moviesURL = import.meta.env.VITE_API;
const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRateMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRateMovies(topRatedUrl);
  }, []);
  console.log("Resposssssssta");
  return (
    <div>
      {topMovies &&
        topMovies.map((movies) => {
          <p>{movies.title}</p>;
        })}
    </div>
  );
};

export default Home;

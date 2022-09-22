import axios from "axios";
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { API_KEY, BASE_URL } from "../constants";

export default function MoviesList() {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      axios.get(`${BASE_URL}/popular?api_key=${API_KEY}`).then((response) => {
         setMovies(response.data.results);
      });
   }, []);

   return (
      <>
         <Header />
         <h3 className="text-center text-dark-purple font-semibold text-2xl mt-20 mb-6">TMDB Most Popular Movies</h3>
         <h4 className="text-center text-light-purple font-medium text-lg">Find the ratings of movies and select what to watch among various popular movies</h4>
         <div className="grid grid-cols-3 gap-6 m-10">
            {movies.map((movie) => {
               return (<MovieCard key={movie.id} movie={movie} />)
            })}
         </div>
      </>
   )
}
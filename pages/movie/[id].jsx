import axios from "axios";
import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from "../../constants";
import { useRouter } from 'next/router';
import Image from "next/image";
import { posterLoader } from "../../helpers/posterLoader";
import Header from "../../components/Header";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Movie() {
   const [movie, setMovie] = useState({});
   const router = useRouter()
   const { id } = router.query

   useEffect(() => {
      if (!router.isReady) return;
      axios.get(`${BASE_URL}/${id}?api_key=${API_KEY}`).then((response) => {
         setMovie(response.data);
      });
   }, [router.isReady, id]);

   if (Object.keys(movie).length === 0) return

   return (
      <>
         <Header />
         <div className="flex flex-row h-full m-16 space-x-16 items-center">
            <div className="w-1/2">
               <Image loader={posterLoader} width={500} height={500} className="rounded-lg" src={movie.poster_path} alt={movie.title} />
            </div>
            <div className="w-1/2 text-left">
               <h2 className="text-dark-purple text-4xl font-bold uppercase tracking-wider mb-2">{movie.original_title}</h2>
               {movie.release_date ? <p className="font-xs text-gray-500 text-sm mb-6">{movie.release_date.split('-')[0]}</p> : <></>}
               <div className="flex flex-row space-x-12">
                  <p className="border rounded-md border-gray-300 font-xs text-gray-400 text-sm mb-6 p-1 w-max">{movie.runtime} min</p>
                  {(movie.genres && movie.genres.length > 0) ? <div>{movie.genres.map((genre, i) => {
                     return <p key={genre.id} className="font-xs text-light-purple text-sm mb-6 p-1 w-max inline-block">{i + 1 === movie.genres.length ? genre.name : `${genre.name},`}</p>
                  })}
                  </div> : <></>}
               </div>
               <h4 className="font-sm text-black text-md mb-8"> {movie.overview}</h4>
               <h6 className=" text-light-blue text-lg font-medium text-right mr-6">{movie.vote_average.toFixed(1)} <FontAwesomeIcon className="inline" icon={faStar} aria-hidden="true" color="#E3A009" /></h6>
            </div>
         </div>
      </>
   )
}
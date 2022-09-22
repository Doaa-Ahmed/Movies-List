import Image from "next/image";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { posterLoader } from "../helpers/posterLoader";

export default function MovieCard({ movie }) {

   return (
      <div className="shadow-lg rounded-lg flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
         <a href={`/movie/${movie.id}`}>
            {movie.poster_path ? <Image loader={posterLoader} width={500} height={500} className="rounded-t-lg" src={movie.poster_path} alt={movie.title} /> : <></>}
         </a>
         <div className="p-6 flex flex-row justify-between">
            <h5 className="text-dark-purple text-xl font-medium mb-2">{movie.original_title}</h5>
            <h6 className="text-light-blue text-lg font-medium mb-2">{movie.vote_average.toFixed(1)} <FontAwesomeIcon className="inline" icon={faStar} aria-hidden="true" color="#E3A009" /></h6>
         </div>
      </div>
   )
}
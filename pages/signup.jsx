import Header from "../components/Header";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from "next/router";
import { useAuth } from "../helpers/useAuth";


export default function Signup() {
   const router = useRouter();
   const auth = useAuth();

   const handleSubmit = (e) => {
      auth.signup();
      e.preventDefault();
      router.push("/movies-list");
   }
   return (
      <div className="flex flex-col h-screen">
         <Header />
         <div className="flex items-start justify-center mx-64 h-full mt-32">
            <form className="w-1/2 border rounded p-8 shadow-2xl relative" onSubmit={e => handleSubmit(e)}>
               <div className="bg-white border border-gray-200 rounded-full absolute -top-4 py-1 px-2">
                  <FontAwesomeIcon icon={faUser} aria-hidden="true" color="#9BA2E6"></FontAwesomeIcon>
               </div>
               <h4 className="font-semibold text-center text-dark-purple text-2xl mb-8">Signup</h4>
               <div className="flex flex-row space-x-2">
                  <input placeholder="First Name" className="w-1/2 border border-gray-200 rounded px-2 py-1 mb-2" type="text" required />
                  <input placeholder="Last Name" className="w-1/2 border border-gray-200 rounded px-2 py-1 mb-2" type="text" required />
               </div>
               <input placeholder="Email" className="border border-gray-200 rounded w-full px-2 py-1 mb-2" type="email" required />
               <input placeholder="Password" className="border border-gray-200 rounded w-full px-2 py-1 mb-2" type="password" required />
               <input placeholder="Confirm Password" className="border border-gray-200 rounded w-full px-2 py-1 mb-6" type="password" required />
               <button className="bg-dark-purple text-white text-base font-semibold py-2 px-4 rounded w-full " type="submit">Signup</button>
            </form>
         </div>
      </div>
   )
}
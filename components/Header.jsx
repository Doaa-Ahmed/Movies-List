import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuth } from "../helpers/useAuth";

export default function Header() {
   const auth = useAuth();
   useEffect(() => { }, [auth.loggedIn])
   const router = useRouter();

   return (
      <nav className="flex items-center bg-white border-b border-gray-200 h-16 z-20">
         <div className="w-full px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-between items-center">
               <div className="flex  items-center justify-center">
                  <Link className="flex" href="/#" id="homeLink">
                     <a>
                        <Image className="block h-8 w-auto" src="/logo.png" width="40" height="40/(16/9)" alt="movies" />
                     </a>
                  </Link>
                  <p className="ml-1 inline-block align-middle font-bold text-dark-purple">Movies</p>
               </div>
               <div className="hidden md:flex md:space-x-8 sm:items-center text-dark-purple">
                  <Link href="/#" className="inline-flex items-center px-1 pt-1 text-sm font-medium no-underline hover:underline"><a>Docs</a></Link>
                  <Link href="/movies" className="inline-flex items-center px-1 pt-1 text-sm font-medium" aria-current="page"><a>Movies</a></Link>
                  <Link href="/#" className="inline-flex items-center px-1 pt-1 text-sm font-medium"><a>Pricing</a></Link>
               </div>

               <div className="flex flex-row">
                  {auth.loggedIn ?
                     <button className="bg-dark-purple text-white text-base font-semibold py-2 px-4 rounded" onClick={() => { auth.logout(); router.push("/login") }}>Logout</button>
                     :
                     <>
                        <button className="text-dark-purple text-base font-semibold py-2 px-4 rounded mr-2" onClick={() => { router.push("/login") }}>Sign in</button>
                        <button className="bg-dark-purple text-white text-base font-semibold py-2 px-4 rounded" onClick={() => { router.push("/signup") }}>Sign up</button>
                     </>
                  }
               </div>
            </div>
         </div>
         <div id="mobileMenu" className="md:hidden w-full pt-3.5 pb-3.5 absolute top-16 mt-4 border-b border-gray-200 bg-white z-20" style={{ display: "none" }}>
            <Link href="/#" className="inline-flex items-center px-1 pt-1 text-sm font-medium"><a>Docs</a></Link>
            <Link href="/#" className="inline-flex items-center px-1 pt-1 text-sm font-medium" aria-current="page"><a>Movies</a></Link>
            <Link href="/#" className="inline-flex items-center px-1 pt-1 text-sm font-medium" ><a>Pricing</a></Link>
         </div>
      </nav >
   )
}
import { useState } from "react"
import Header from "../components/Header";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from "next/router";
import { useAuth } from "../helpers/useAuth";
import { validate } from "../helpers/validate";


export default function Signup() {
   const router = useRouter();
   const auth = useAuth();

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("")
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [errMsg, setErrMsg] = useState("")

   const handleSubmit = (e) => {
      e.preventDefault();
      if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
         setErrMsg("Missing Field");
      }
      else if (!validate({ type: "name", value: firstName }) || !validate({ type: "name", value: lastName })) {
         setErrMsg("please enter valid name");
      }
      else if (!validate({ type: "email", value: email })) {
         setErrMsg("please enter a valid email");
      }
      else if (!validate({ type: "password", value: password })) {
         setErrMsg("Please enter a password with the a valid combination")
      }
      else if (password.localeCompare(confirmPassword !== 0)) {
         setErrMsg("confirm password doesn't match password")
      }
      auth.signup();
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
                  <input placeholder="First Name" className="w-1/2 border border-gray-200 rounded px-2 py-1 mb-2" type="text" required onChange={(e => { setFirstName(e.target.value) })} />
                  <input placeholder="Last Name" className="w-1/2 border border-gray-200 rounded px-2 py-1 mb-2" type="text" required onChange={(e => { setLastName(e.target.value) })} />
               </div>
               <input placeholder="Email" className="border border-gray-200 rounded w-full px-2 py-1 mb-2" type="email" required onChange={(e => { setEmail(e.target.value) })} />
               <input placeholder="Password" className="border border-gray-200 rounded w-full px-2 py-1" type="password" required onChange={(e => { setPassword(e.target.value) })} />
               <p class="text-sm text-gray-400 mb-2">password should be a combination of capital and small letters, digits, and special character at least 1 character for each.</p>

               <input placeholder="Confirm Password" className="border border-gray-200 rounded w-full px-2 py-1 mb-6" type="password" required onChange={(e => { setConfirmPassword(e.target.value) })} />
               <button className="bg-dark-purple text-white text-base font-semibold py-2 px-4 rounded w-full " type="submit">Signup</button>
               {
                  errMsg && <p className="text-xs text-red-500 font-normal mt-2">{errMsg}</p>
               }
               <p className="text-xs italic text-gray-700 font-normal mt-2">By clicking Signup, you agree to our <span className="text-blue-400 cursor-pointer">Terms and Conditions</span></p>
            </form>
         </div>
      </div>
   )
}
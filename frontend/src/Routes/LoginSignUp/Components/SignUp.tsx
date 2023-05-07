import { useContext, useState } from 'react';
import { browserSessionPersistence, createUserWithEmailAndPassword, setPersistence } from "firebase/auth";
import { auth } from "../../../scripts/firebase";
import { userContext } from '../../../Root';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../scripts/colors.tsx';
import { useNavigate } from 'react-router-dom';

type SignUpProps = {
  setNeedSignUp: React.Dispatch<React.SetStateAction<boolean>>
}

function SignUp({setNeedSignUp}: SignUpProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
	const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const handleSignUp = (event : any) => {
    event.preventDefault();
		//passwords must match
		if (password !== retypePassword) {
			alert("Passwords do not match");
			return;
		}
		//password must be at least 6 characters long
		if (password.length < 6) {
			alert("Password must be at least 6 characters long");
			return;
		}
		//email must be valid
		if (!email.includes("@")) {
			alert("Email must be valid");
			return;
		}
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Handle successful sign-up
				setUser(userCredential.user);
        navigate("/home");
      })
      .catch((error) => {
        // Handle errors
      });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
  };

  return (
    <section className="bg-gray-50 text-left">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                      Create your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={(e) => handleSignUp(e)}>
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                          <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="uwid@uw.edu" required={true}/>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                          <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true}/>
                      </div>
                      <div>
                          <label htmlFor="retype_password" className="block mb-2 text-sm font-medium text-gray-900">Retype Password</label>
                          <input onChange={(e)=>setRetypePassword(e.target.value)} type="password" name="retype_password" id="retype_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true}/>
                      </div>
                      <div className="flex items-center justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"/>
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500">Remember me</label>
                              </div>
                          </div>
                      </div>
                      <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                      <p className="text-sm font-light text-gray-500 pb-5">
                          Already have an account? <a onClick={()=>setNeedSignUp(false)} className="font-medium text-primary-600 hover:underline">Sign up</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  );
}

export default SignUp;

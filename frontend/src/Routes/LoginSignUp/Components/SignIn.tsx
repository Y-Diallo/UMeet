import { useContext, useState } from 'react';
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../scripts/firebase';
import { userContext } from '../../../Root';
import { useNavigate } from 'react-router-dom';

type SignInProps = {
  setNeedSignUp: React.Dispatch<React.SetStateAction<boolean>>
}

function SignIn({setNeedSignUp}: SignInProps) {
  //https://flowbite.com/blocks/marketing/login/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleSignIn = (event : any) => {
    event.preventDefault();
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-in
				setUser(userCredential.user);
        navigate("/home");
      })
      .catch((error) => {
        // Handle errors
        console.warn(error);
      });
    })
    .catch((error) => {
      // Handle Errors here.
      console.warn(error);
    });
    
  };

  return (
    <section className="bg-[#4B2E83] text-left w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                      Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={(e) => handleSignIn(e)}>
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                          <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="uwid@uw.edu" required={true}/>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                          <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required={true}/>
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
                      <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                      <p className="text-sm font-light text-gray-500 pb-5">
                          Don’t have an account yet? <a onClick={()=>setNeedSignUp(true)} className="font-medium text-primary-600 hover:underline">Sign up</a>
                      </p>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline w-full text-right">Forgot password?</a>
                  </form>
              </div>
          </div>
      </div>
    </section>
  );
}

export default SignIn;

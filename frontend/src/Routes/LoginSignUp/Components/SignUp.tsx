import { useContext, useState } from 'react';
import { browserSessionPersistence, createUserWithEmailAndPassword, setPersistence } from "firebase/auth";
import { auth } from "../../../scripts/firebase";
import { userContext } from '../../../Root';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../scripts/colors.tsx';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
	const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const handleSignup = (event : any) => {
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
    <form style={{maxWidth:"25vw", width:"20em", margin:"2em"}} onSubmit={handleSignup}>
      <label style={{color:PRIMARY_COLOR}}>
        Email:
        <input style={{color:SECONDARY_COLOR, backgroundColor:PRIMARY_COLOR}} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label style={{color:PRIMARY_COLOR}}>
        Password:
        <input style={{color:SECONDARY_COLOR, backgroundColor:PRIMARY_COLOR}} type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <label style={{color:PRIMARY_COLOR}}>
        Retype Password:
        <input style={{color:SECONDARY_COLOR, backgroundColor:PRIMARY_COLOR}} type="password" value={retypePassword} onChange={(event) => setRetypePassword(event.target.value)} />
      </label>
      <button style={{color:SECONDARY_COLOR, backgroundColor:PRIMARY_COLOR}} type="submit" onClick={handleSignup}>Sign up</button>
    </form>
  );
}

export default SignUp;

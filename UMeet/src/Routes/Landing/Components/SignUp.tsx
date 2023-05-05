import { useContext, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../scripts/firebase";
import { userContext } from '../../../Root';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../scripts/colors.tsx';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
	const { user, setUser } = useContext(userContext);
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

    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Handle successful sign-up
				setUser(userCredential.user);
      })
      .catch((error) => {
        // Handle errors
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

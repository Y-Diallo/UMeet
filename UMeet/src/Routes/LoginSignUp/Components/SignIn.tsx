import { useContext, useState } from 'react';
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../scripts/firebase';
import { userContext } from '../../../Root';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../scripts/colors';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const { user, setUser } = useContext(userContext);
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
      });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    
  };

  return (
    <form style={{maxWidth:"25vw", width:"20em", margin:"2em"}} onSubmit={handleSignIn}>
      <label style={{color:PRIMARY_COLOR}}>
        Email:
        <input style={{color:SECONDARY_COLOR, backgroundColor:PRIMARY_COLOR}} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label style={{color:PRIMARY_COLOR}}>
        Password:
        <input style={{color:SECONDARY_COLOR, backgroundColor:PRIMARY_COLOR}} type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button style={{color:SECONDARY_COLOR, backgroundColor:PRIMARY_COLOR}} type="submit" onClick={handleSignIn}>Sign in</button>
    </form>
  );
}

export default SignIn;

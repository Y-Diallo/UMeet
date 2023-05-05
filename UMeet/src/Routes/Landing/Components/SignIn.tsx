import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../scripts/firebase';
import { userContext } from '../../../Root';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../scripts/colors';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const { user, setUser } = useContext(userContext);
  
  const handleSignIn = (event : any) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign-in
				setUser(userCredential.user);
      })
      .catch((error) => {
        // Handle errors
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

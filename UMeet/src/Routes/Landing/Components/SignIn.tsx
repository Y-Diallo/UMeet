import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../scripts/firebase';
import { userContext } from '../../Root';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'
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
    <FormControl maxW={"25vw"} w={"20em"} m={"2em"} onSubmit={handleSignIn}>
      <FormLabel color={PRIMARY_COLOR}>
        Email:
        <Input color={SECONDARY_COLOR} backgroundColor={PRIMARY_COLOR} type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </FormLabel>
      <FormLabel color={PRIMARY_COLOR}>
        Password:
        <Input color={SECONDARY_COLOR} backgroundColor={PRIMARY_COLOR} type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </FormLabel>
      <Button color={SECONDARY_COLOR} backgroundColor={PRIMARY_COLOR} type="submit" onClick={handleSignIn}>Sign in</Button>
    </FormControl>
  );
}

export default SignIn;

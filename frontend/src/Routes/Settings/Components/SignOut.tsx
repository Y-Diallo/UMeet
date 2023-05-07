import { signOut } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../Root";
import { auth } from "../../../scripts/firebase";

function SignOutButton() {
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Handle successful sign-out
				setUser(null);
        //clear any user data from local storage
        navigate("/");
      })
      .catch((error) => {
        // Handle errors
        console.warn(error);
      });
  };

  return (
    <button className="bg-purple-900 text-white w-30 px-1 py-3 rounded-lg inline-block" onClick={handleSignOut}>Sign out</button>

  );
}

export default SignOutButton;

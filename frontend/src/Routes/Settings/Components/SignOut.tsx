import { signOut } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../Root";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../../scripts/colors";
import { auth } from "../../../scripts/firebase";

function SignOutButton() {
  const { user, setUser } = useContext(userContext);
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
      });
  };

  return (
    <button className="bg-purple text-white" onClick={handleSignOut}>Sign out</button>
  );
}

export default SignOutButton;

import { useState } from "react";
import SignOutButton from "./Components/SignOut";
import { faUser, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Settings() {
  const [profilePicture, setProfilePicture] = useState<string>(
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  );
  return (
    <div className="flex flex-col justify-center h-full mx-10">
      <img
        className="shadow rounded-full border-non inline-block scale-[0.5]"
        src={profilePicture}
        alt="Profile Picture"
      />
<div className="ml-5">
  <h4 className="uppercase text-left sm:text-center font-bold">Account</h4>
  <div className="mt-5 mb-3 flex items-center">
    <div className="border border-purple-900 rounded p-2 w-10 flex items-center justify-center">
      <FontAwesomeIcon icon={faUser} />
    </div>
    <h5 className="ml-4">Edit Profile</h5>
  </div>
  <div className="mt-5 mb-20 flex items-center">
    <div className="border border-purple-900 rounded p-2 w-10 flex items-center justify-center">
      <FontAwesomeIcon icon={faTrashCan} />
    </div>
    <h5 className="ml-4">Delete Account</h5>
  </div>
</div>


      <SignOutButton />
    </div>
  );
}

export default Settings;

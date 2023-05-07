import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
function Landing() {
  return (
    //add if statement checking if the auth user is logged in and if so return the dashboard view instead
    <div className="flex h-screen w-screen bg-[#4B2E83]">
      <FontAwesomeIcon
        icon={faLink}
        size="lg"
        className="mr-2 mt-12 ml-5"
        color="#B7A57A"
      />
      <div className="mt-11">
        <h1 className="text-xl font-bold font-sans text-[#BCC1CA]">
          Husky Links
        </h1>
        <h1 className="text-2xl font-bold font-sans text-[#B7A57A] mt-10 -ml-8">
          JOIN THE PACK
        </h1>
        <h1 className="text-2xl font-bold font-sans text-[#BCC1CA] mt-3 -ml-8">
          CONNECT IN A WAY
          <br className="lg:hidden" /> YOU NEVER HAVE BEFORE
        </h1>
        <h5 className="text-sm font-light font-sans text-[#BCC1CA] mt-6 max-w-[90%] -ml-8">
          Husky Links is a social platform web app with the sole goal of
          connecting UW students across campuses. Host parties, club events, and
          so much more with just a click of a button!
        </h5>
        <div className="flex items-center mt-10">
          <button className="bg-[#B7A57A] -ml-8 mr-3 text-white font-bold rounded-full px-8 py-2">
            Sign Up
          </button>
          <a className="text-[#BCC1CA] font-light ml-2">No account?</a>
        </div>
      </div>
    </div>
  );
}

export default Landing;

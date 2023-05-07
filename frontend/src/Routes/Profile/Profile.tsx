import {
  faStar,
  faHeadset,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Profile() {
  const [name, setName] = useState<string>("Alexander Dynamic Hoff");
  const [profilePicture, setProfilePicture] = useState<string>(
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  );
  const [major, setMajor] = useState<String>("Art Major");
  const [userType, setUserType] = useState<String>("Student");
  const [avgRating, setAvgRating] = useState<number>(4);
  const [activeEvents, setActiveEvents] = useState<number>(3);
  const [attendedEvents, setAttendedEvents] = useState<number>(30);
  const [hostedEvents, setHostedEvents] = useState<number>(10);
  const [totalAttendees, setTotalAttendees] = useState<number>(28);
  return (
    <div>
      <img
        className="w-48 h-48 shadow rounded-full max-w-full h-auto align-middle border-non inline"
        src={profilePicture}
      ></img>
      <br></br>
      <br></br>
      <h1 className="mx-auto text-3xl text-purple-900 font-bold">{name}</h1>
      <div className="my-3">
        <h3 className="mx-auto text-lg text-purple-900">{major}</h3>
      </div>
      <div className="my-3">
        <button className="button-uw-gold text-white inline border-solid content-around w-48">
          {userType}
        </button>
      </div>

      {/* <div className="grid grid-cols-2 gap-0 justify-center my-3">
        <div>
          <h2 className="p-5 text-center content-evenly">EVENTS HOSTED</h2>
        </div>
        <div>
          <h2 className="p-5 text-center">EVENT ATTENDED</h2>
        </div>
        <div>
          <h2>{hostedEvents}</h2>
        </div>
        <div>
          <h2>{attendedEvents}</h2>
        </div>
      </div> */}

      <div className="grid grid-rows-2 grid-flow-col gap-0 mt-12 mb-2 m-auto max-w-screen-sm text-purple-900">
        <div className="p-2 text-center content-evenly">EVENTS HOSTED</div>
        <div className="text-center content-evenly text-xl font-bold">
          {hostedEvents}
        </div>
        <div className="p-2 text-center content-evenly">EVENTS ATTENDED</div>
        <div className="text-center content-evenly text-xl font-bold">
          {attendedEvents}
        </div>
      </div>

      <div className="flex flex-wrap bg-purple-900 rounded-xl content-center mx-auto max-w-screen-md justify-center">
        <div className="m-3">
          <div className="grid grid-row3">
            <div className="flex grid grid-cols-4 margin-pt5rem">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
                {/* <img
                  className="object-scale-down content-center h-7 w-7 "
                  src="star.png"
                ></img> */}
              </div>

              <div className="col-span-3 text-left text-xl text-white">
                Event Average Ratings <br /> {avgRating}/5 Stars
              </div>
            </div>

            <div className="flex grid grid-cols-4 margin-pt5rem">
              <div className="col-span-1">
                <FontAwesomeIcon
                  icon={faHeadset}
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div className="col-span-3 text-left text-xl text-white">
                Currently Hosting <br /> {activeEvents} Events
              </div>
            </div>

            <div className="flex grid grid-cols-4 margin-pt5rem">
              <div className="col-span-1">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div className="col-span-3 text-left text-xl text-white">
                Current Attendees
                <br /> {totalAttendees} Huskies
              </div>
            </div>
          </div>

          <button className="button-uw-gold text-white inline border-solid content-around w-48">
            EDIT PROFILE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

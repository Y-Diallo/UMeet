
import "../../index.css"
import { useContext, useEffect, useState } from "react";
import EventCard from "../Home/Components/EventCard";
import { EventDetails } from "../../scripts/types";
import { defaultEvents } from "../../scripts/defaultData";
import { userContext } from "../../Root";
import { onValue, ref } from "firebase/database";
import { db } from "../../scripts/firebase";

function MyEvents() {
    const [name, setName] = useState<string>("Alexander Hoff")
    const [profilePicture, setProfilePicture] = useState<string>("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80")
    const [joinedEvents, setJoinedEvents] = useState<EventDetails[]>([defaultEvents[2]])
    const [hostedEvents, setHostedEvents] = useState<EventDetails[]>([
        defaultEvents[0],defaultEvents[1]]);
    const [showJoinedOrHosted, setShowJoinedOrHosted] = useState<boolean>(true);
    
    const {user} = useContext(userContext);

    useEffect(() => {
		if (user !== null) {
            onValue(ref(db, `users/${user.uid}/enrolledEvents/`), (snapshot) => {
				const eventsJoined: string[] = [];
				const entries = snapshot.val();
				for (const key in entries) {
					eventsJoined.push(entries[key]);
				}
                //get current events
                onValue(ref(db, `events/`), (snapshot) => {
                    const events: EventDetails[] = [];
                    const entries = snapshot.val();
                    for (const key in entries) {
                        if(eventsJoined.includes(key)){
                            events.push(entries[key]);
                            console.log(entries[key]);
                        }
                    }
                    console.log(events);
                    setJoinedEvents(events);
                });
			});
            //get name and profile picture
            onValue(ref(db, `users/${user.uid}/`), (snapshot) => {
                const entries = snapshot.val();
                setName(entries.name);
                setProfilePicture(entries.profilePicture);
            });
            //get hosted events
            onValue(ref(db, `users/${user.uid}/hostedEvents/`), (snapshot) => {
				const eventsJoined: string[] = [];
				const entries = snapshot.val();
				for (const key in entries) {
					eventsJoined.push(entries[key]);
				}
                //get current events
                onValue(ref(db, `events/`), (snapshot) => {
                    const events: EventDetails[] = [];
                    const entries = snapshot.val();
                    for (const key in entries) {
                        if(eventsJoined.includes(key)){
                            events.push(entries[key]);
                            console.log(entries[key]);
                        }
                    }
                    console.log(events);
                    setHostedEvents(events);
                });
			});
		}

	}, []);

    return ( 
        <div className="pb-24 p-8">
            <h1 className="text-4xl font-bold">My Events</h1>
            {/** two buttons touching each other in a line, with a border bottom
             * if one is selected, its the border bottom and text is purple
             */}
            <div className="flex flex-row justify-center border-purple-500">
                <button className={`text-2xl font-bold ${showJoinedOrHosted ? "text-purple-500 border-b-2 border-purple-500" : "border-b-2 border-black"}`} onClick={() => setShowJoinedOrHosted(true)}>Joined</button>
                <button className={`text-2xl font-bold ${!showJoinedOrHosted ? "text-purple-500 border-b-2 border-purple-500" : "border-b-2 border-black"}`} onClick={() => setShowJoinedOrHosted(false)}>Hosted</button>
            </div>
            {showJoinedOrHosted ?<div className="text-left m-0">
                {joinedEvents.map((eventDetails, index) => (
                    <EventCard event={eventDetails} />
                ))}
            </div>:
            <div className="text-left m-0">
                {hostedEvents.map((eventDetails, index) => (
                    <EventCard event={eventDetails} />
                ))}
            </div>}
        </div>

    );
}

export default MyEvents;
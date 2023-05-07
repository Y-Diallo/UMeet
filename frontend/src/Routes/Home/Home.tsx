
import "../../index.css"
import { useContext, useEffect, useState } from "react";
import PersonalizedHeader from "./Components/PersonalizedHeader";
import EventCard from "./Components/EventCard";
import { EventDetails } from "../../scripts/types";
import { defaultEvents } from "../../scripts/defaultData";
import EventTypeHeader from "./Components/EventTypeHeader";
import { userContext } from "../../Root";
import { onValue, ref } from "firebase/database";
import { db } from "../../scripts/firebase";

function Home() {
    const [name, setName] = useState<string>("Alexander Hoff")
    const [profilePicture, setProfilePicture] = useState<string>("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80")
    const [joinedEvents, setJoinedEvents] = useState<EventDetails[]>([defaultEvents[2]])
    const [popularEventDetails, setPopularEventDetails] = useState<EventDetails[]>([
        defaultEvents[0],defaultEvents[1]]);
    const [recommendedEventDetails, setRecommendedEventDetails] = useState<EventDetails[]>([
        defaultEvents[2],defaultEvents[3]]);
    
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
            
		}

	}, []);

    return ( 
        <div className="pb-24 p-8">
            <div className="text-left m-0">
                <PersonalizedHeader name={name} profilePicture={profilePicture} />
                {joinedEvents.length != 0 ? <EventTypeHeader name="Joined Events" type="joined"/>: null}
                {joinedEvents.map((eventDetails, index) => (
                    <EventCard event={eventDetails} />
                ))}

                <EventTypeHeader name="Popular Events" type="popular"/>
                {popularEventDetails.map((eventDetails, index) => (
                    <EventCard event={eventDetails} />
                ))}
                
                <EventTypeHeader name="Nearby Events" type="nearby"/>
                {recommendedEventDetails.map((eventDetails, index) => (
                    <EventCard event={eventDetails} />
                ))}
            </div>
        </div>

    );
}

export default Home;
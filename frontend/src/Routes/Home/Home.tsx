
import "../../index.css"
import { useState } from "react";
import PersonalizedHeader from "./Components/PersonalizedHeader";
import EventCard from "./Components/EventCard";
import { EventDetails } from "../../scripts/types";
import { defaultEvents } from "../../scripts/defaultData";

function Home() {
    const [name, setName] = useState<string>("Alexander Hoff")
    const [profilePicture, setProfilePicture] = useState<string>("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80")
    const [joinedEvents, setJoinedEvents] = useState<EventDetails[]>([defaultEvents[2]])
    const [popularEventDetails, setPopularEventDetails] = useState<EventDetails[]>([
        defaultEvents[0],defaultEvents[1]]);
    const [recommendedEventDetails, setRecommendedEventDetails] = useState<EventDetails[]>([
        defaultEvents[2],defaultEvents[3]]);
        
    return ( 
        <div className="pb-24">
            <div className="text-left m-0">
                <PersonalizedHeader name={name} profilePicture={profilePicture} />
                <div className="flex justify-between">
                    <h3 className="leading-7 font-sans font-normal mt-3">Joined Events</h3>
                    <a href="#" className="text-sm text-purple-900 mt-auto">See More</a>
                </div>
                {joinedEvents.map((eventDetails, index) => (
                    <EventCard event={eventDetails} />
                ))}

                <div className="flex justify-between">
                    <h3 className="leading-7 font-sans font-normal mt-3">Popular Events</h3>
                    <a href="#" className="text-sm text-purple-900 mt-auto">See More</a>
                </div>
                {popularEventDetails.map((eventDetails, index) => (
                    <EventCard event={eventDetails} />
                ))}
                
                <div className="flex justify-between">
                    <h3 className="leading-7 font-sans font-normal mt-3">Nearby Event</h3>
                    <a href="#" className="text-sm text-purple-900 mt-auto">See Details</a>
                </div>
                {recommendedEventDetails.map((eventDetails, index) => (
                    <EventCard event={eventDetails} />
                ))}
            </div>
        </div>

    );
}

export default Home;
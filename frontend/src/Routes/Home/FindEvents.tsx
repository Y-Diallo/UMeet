import { faBasketShopping, faBriefcase, faChampagneGlasses, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { defaultEvents } from "../../scripts/defaultData";
import { EventDetails } from "../../scripts/types";
import EventCard from "./Components/EventCard";
import { useParams } from "react-router-dom";

function FindEvents() {
    const [title, setTitle] = useState<string>("Find Events");
    const {searchType} = useParams<{searchType: string}>();
    const [eventDetails, setPopularEventDetails] = useState<EventDetails[]>([
        defaultEvents[0],defaultEvents[1],defaultEvents[2],defaultEvents[3]]);
    
    useEffect(() => {
        //scroll to top of page
        window.scrollTo(0, 0);
        if (searchType === "nearby") {
            setTitle("Nearby Events");
            //pull from nearby events from backend
        } else if (searchType === "popular") {
            setTitle("Popular Events");
            //pull from popular events from backend
        } else if (searchType === "recommended") {
            setTitle("Recommended Events");
            //pull from recommended events from backend
        } else if (searchType === "joined") {
            setTitle("Joined Events");
            //pull from joined events from backend
        } 
    }, [searchType]);
    // else if (searchType === "search") {
    //     setTitle("Search Results");
    // }

    return (
    <div className="p-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <label className="relative block mt-6">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faSearch} />
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-3 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Music event, Parties..." type="text" name="search"/>
            <button type="submit" className="absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-white bg-purple-900 rounded-r-full border border-purple-900 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                Search
            </button>
        </label>
        <h3 className="leading-7 font-sans font-normal mt-8">Event Categories</h3>

        <div className="max-w-screen-xl mx-auto mt-3">
            <div className="flex flex-wrap justify-center">
                <div className="m-1 flex flex-wrap text-xs sm:text-sm bg-gray-200 rounded-full px-4 py-2 flex-row-reverse">
                <span className="pl-2">Business</span>
                <FontAwesomeIcon icon={faBriefcase} />
                </div>

                <div className="m-1 flex flex-wrap text-xs sm:text-sm bg-gray-200 rounded-full px-4 py-2 flex-row-reverse">
                <span className="pl-2">Parties</span>
                <FontAwesomeIcon icon={faChampagneGlasses} />
                </div>

                <div className="m-1 flex flex-wrap text-xs sm:text-sm bg-gray-200 rounded-full px-4 py-2 flex-row-reverse">
                <span className="pl-2">Potluck</span>
                <FontAwesomeIcon icon={faBasketShopping} />
                </div>
            </div>
        </div>
        {eventDetails.map((eventDetails, index) => (
            <EventCard event={eventDetails} />
        ))}
    </div>  
    );
}

export default FindEvents;
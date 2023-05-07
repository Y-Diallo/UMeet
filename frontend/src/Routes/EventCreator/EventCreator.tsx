import { useState } from "react";
import { defaultEvents } from "../../scripts/defaultData";
import { EventDetails } from "../../scripts/types";
import { createEvent } from "../../scripts/firebase";
import { useNavigate } from "react-router-dom";

function EventCreator() {
    const [eventDetails, setEventDetails] = useState<EventDetails>(defaultEvents[0]);
    const navigate = useNavigate();
    const createNewEvent = () => {
        console.warn(createEvent({event:eventDetails}))
        navigate(`/event_details/${eventDetails.id}`);
    }
    return ( 
    <div className="mx-6 mb-24">
        <h1 className="text-3xl font-bold text-purple-900 mt-10">Host Event</h1>
        <div className="flex flex-col">
            <label className="text-lg font-bold text-purple-900 mt-10">Event Title</label>
            <input onChange={(e)=>setEventDetails({...eventDetails, title:e.target.value})}  className="border-2 border-purple-900 rounded-lg p-2" type="text" placeholder="Event Title" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Description</label>
            <textarea onChange={(e)=> setEventDetails({...eventDetails, description:e.target.value})} className="border-2 border-purple-900 rounded-lg p-2" placeholder="Event Description" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Location</label>
            <input onChange={(e)=>setEventDetails({...eventDetails, location:e.target.value})} className="border-2 border-purple-900 rounded-lg p-2" type="text" placeholder="Event Location" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Start Date</label>
            <input onChange={(e)=>setEventDetails({...eventDetails, startDate:e.target.value})} className="border-2 border-purple-900 rounded-lg p-2" type="datetime-local" placeholder="Event Start Date" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event End Date</label>
            <input onChange={(e)=>setEventDetails({...eventDetails, endDate:e.target.value})} className="border-2 border-purple-900 rounded-lg p-2" type="datetime-local" placeholder="Event End Date" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Max Attendees</label>
            <input onChange={(e)=>setEventDetails({...eventDetails, maxAttendees:Number(e.target.value)})} className="border-2 border-purple-900 rounded-lg p-2" type="number" placeholder="Event Max Attendees" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Image</label>
            <input onChange={(e)=>setEventDetails({...eventDetails, image:e.target.value})} className="border-2 border-purple-900 rounded-lg p-2" type="url" placeholder="Event Image" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Splash Image</label>
            <input onChange={(e)=>setEventDetails({...eventDetails, image2:e.target.value})} className="border-2 border-purple-900 rounded-lg p-2" type="url" placeholder="Event Image 2" />

            <button onClick={()=> createNewEvent()} className="bg-purple-900 text-white rounded-lg p-2 mt-10">Create Event</button>
        </div>
    </div>
    );
}

export default EventCreator;
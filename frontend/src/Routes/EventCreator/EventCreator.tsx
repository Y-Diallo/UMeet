import { useState } from "react";
import { defaultEvents } from "../../scripts/defaultData";
import { EventDetails } from "../../scripts/types";

/**
 * 
 * @returns EventDetails = {
    id: string;
    title: string;
    hostId: string;
    attendees: number;
    maxAttendees: number;
    image: string;
    image2?: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}
 */
function EventCreator() {
    const [eventDetails, setEventDetails] = useState<EventDetails>(defaultEvents[0]);
    return ( 
    <div className="ml-6">
        <h1 className="text-3xl font-bold text-purple-900 mt-10">Host Event</h1>
        <div className="flex flex-col">
            <label className="text-lg font-bold text-purple-900 mt-10">Event Title</label>
            <input className="border-2 border-purple-900 rounded-lg p-2" type="text" placeholder="Event Title" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Description</label>
            <textarea className="border-2 border-purple-900 rounded-lg p-2" placeholder="Event Description" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Location</label>
            <input className="border-2 border-purple-900 rounded-lg p-2" type="text" placeholder="Event Location" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Start Date</label>
            <input className="border-2 border-purple-900 rounded-lg p-2" type="date" placeholder="Event Start Date" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event End Date</label>
            <input className="border-2 border-purple-900 rounded-lg p-2" type="date" placeholder="Event End Date" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Min Attendees</label>
            <input className="border-2 border-purple-900 rounded-lg p-2" type="number" placeholder="Event Min Attendees" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Max Attendees</label>
            <input className="border-2 border-purple-900 rounded-lg p-2" type="number" placeholder="Event Max Attendees" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Image</label>
            <input className="border-2 border-purple-900 rounded-lg p-2" type="file" placeholder="Event Image" />

            <label className="text-lg font-bold text-purple-900 mt-10">Event Splash Image</label>
            <input className="border-2 border-purple-900 rounded-lg p-2" type="file" placeholder="Event Image 2" />

            <button className="bg-purple-900 text-white rounded-lg p-2 mt-10">Create Event</button>
        </div>
    </div>
    );
}

export default EventCreator;
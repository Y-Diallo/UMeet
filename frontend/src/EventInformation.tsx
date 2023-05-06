import { useState } from "react";

function EventInformation(){
    const [eventTitle, setEventTitle] = useState("Seattle Art Museum");
    const [eventDate, setEventDate] = useState("May 15,2023");
    const [eventTime, setEventTime] = useState("10:00 AM - 12:00 PM");
    const [eventLocation, setEventLocation] = useState("1300 1st Ave, Seattle, WA 98101");
    const [eventDescription, setEventDescription] = useState("Join other art majors and learn about different art styles!");
    const [eventId, setEventId] = useState("555");
    return(
        <div>
            <h1>Reached Information</h1>
        </div>
    )
}
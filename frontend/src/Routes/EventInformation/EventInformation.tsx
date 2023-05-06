import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays,faClock } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function EventInformation() {
    //disha realm straight up
    const [eventTitle, setEventTitle] = useState("Seattle Art Museum");
    const [eventDate, setEventDate] = useState("May 15");
    const [dayTime, setDayTime] = useState("Thursday");
    const [startTime, setStart] = useState("10:00 AM");
    const [endTime, setEnd] = useState("to 12:00 PM");
    const [eventLocation, setEventLocation] = useState("1300 1st Ave, Seattle, WA 98101");
    const [eventDescription, setEventDescription] = useState("Looking for other Art Majors who want to have a fun outing! Perfect time to network and discover different art styles.");
    const [eventId, setEventId] = useState("555");
    const [eventImage, setEventImage] = useState("https://images.unsplash.com/photo-1583343766731-4410303d8f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80")
    const [enrolled, setenrolled] = useState(30);
    const [maxEnroll, setMaxEnroll] = useState(40);
    return ( 
        <div>
              <div className="overlay absolute inset-0 bg-gray-900 opacity-60"></div>
            <div style={{backgroundImage: `url(${eventImage})`,backgroundSize: 'cover', backgroundPosition: 'center', width:'100vw'}} className="p-0">
                <FontAwesomeIcon style={{ zIndex: 10, position: 'absolute', top: '10%', left: '10%', color:'white'}} icon={faChevronLeft} onClick={() => window.history.back()}/>
                <div className="min-h-screen flex flex-col ">
                    <h2 className="font-semibold text-2xl mt-6 text-left text-white"
                    style={{ zIndex: 10, position: 'absolute', top: '30%', left: '40%', transform: 'translate(-50%, -50%)'}}>
                    {eventTitle}
                    </h2>
                    <div style={{ zIndex: 10, position: 'absolute', top: '40%', left: '12%', display: 'flex', alignItems: 'center', fontWeight:'bold'}}>
                        <FontAwesomeIcon icon={faCalendarDays} size="lg" className="mr-2 text-white mb-1" />
                        <h3 style={{ color:'#DEE1E6'}}>{eventDate}</h3>
                    </div>
                    <h4 style={{ zIndex: 10, position: 'absolute', top: '43.5%', left: '18%', color:'#BCC1CA', fontSize:'14px'}}>{dayTime}</h4>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', top: '40%', left: '50%', display: 'flex', alignItems: 'center', color:'white', fontWeight:'bold'}}>
                    <FontAwesomeIcon className="mr-3" icon={faClock} />
                    <h3>{startTime}</h3>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', top: '43%', left: '58%', display: 'flex', alignItems: 'center', color:'#DEE1E6'}}>
                    <h4>{endTime}</h4>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', top: '50%', left: '12%', display: 'flex', alignItems: 'center', textAlign:'left' }}>
                    <FontAwesomeIcon icon={faLocationDot} size="lg" className="mr-2 text-white mb-1" />
                    <h3 style={{ color:'#DEE1E6', maxWidth: '150px' }}>{eventLocation}</h3>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', top: '50%', left: '60%', display: 'flex', alignItems: 'center'}}>
                <button className="bg-[#4B2E83] rounded-full px-4 py-2 text-white font-bold">Map</button>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', top: '60%', left: '12%', display: 'flex', alignItems: 'center', textAlign:'left' }}>
                    <h3 style={{ color:'#DEE1E6', maxWidth: '300px'}}>{eventDescription}</h3>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', bottom: '65px', left: '0', width: '100vw', height:'6rem', display: 'flex', alignItems: 'center', backgroundColor: 'white', color: 'grey'}}>
                    <h4 className="z-10 text-grey mr-5 ml-5">{enrolled}/{maxEnroll}</h4>
                    <div className="flex -space-x-2 overflow-hidden">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                <div style={{ justifySelf: 'end' }}>
                    <button className="bg-transparent border-2 border-[#4B2E83] px-3 py-1 text-purple font-bold rounded-full ml-20">
                    Invite
                    </button>
                </div>


                </div>





                <div style={{ zIndex: 10, position: 'absolute', bottom: '0', left: '0', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <button className="bg-[#4B2E83] px-8 py-5 text-white font-bold w-full">
                        Already Enrolled
                    </button>
                </div>

            </div>
        </div>
    );
}

export default EventInformation;
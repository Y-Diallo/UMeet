import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays,faClock } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { defaultEvents } from "../../scripts/defaultData";
import { EventDetails } from "../../scripts/types";
import { useNavigate, useParams } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { userContext } from "../../Root";
import { db, enrollInEvent, unenrollInEvent } from "../../scripts/firebase";

function EventInformation() {
    const navigate = useNavigate();
    const dateOptions : Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    const dayOptions : Intl.DateTimeFormatOptions = { weekday: 'long' };
    const timeOptions : Intl.DateTimeFormatOptions  = { hour: 'numeric', minute: 'numeric', hour12: true };
    const [event, setEvent] = useState<EventDetails>(defaultEvents[0]);
    const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
    const [isOwner, setIsOwner] = useState<boolean>(false);

    const [ownerImage, setOwnerImage] = useState<string>("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80")

    const { user } = useContext(userContext);
    const { eventId } = useParams<{eventId: string}>();

    useEffect(() => {
		if (user !== null) {
            onValue(ref(db, `events/${eventId}`), (snapshot) => {
                const events: EventDetails = snapshot.val();
                setEvent(events);
                onValue(ref(db, `users/${user.uid}/enrolledEvents/`), (snapshot) => {
                    //check if user is enrolled
                    const entries = snapshot.val();
                    for (const key in entries) {
                        if(entries[key] === eventId){
                            setIsEnrolled(true);
                        }
                    }
                });
                onValue(ref(db, `users/${user.uid}/hostedEvents/`), (snapshot) => {
                    //check if user is owner
                    const entries = snapshot.val();
                    for (const key in entries) {
                        if(entries[key] === eventId){
                            setIsOwner(true);
                        }
                    }
                });
                if (!isOwner){
                    onValue(ref(db, `users/${events.hostId}/profilePicture`), (snapshot) => {
                        setOwnerImage(snapshot.val());
                    });
                } else {
                    onValue(ref(db, `users/${user.uid}/profilePicture`), (snapshot) => {
                        setOwnerImage(snapshot.val());
                    });
                }
            });  
		}
	}, []);

    function handleEnroll(): void {
        console.log("enroll");
        enrollInEvent({eventId}).then((result) => {
            if(result){
                console.log(result);
            } else {
                console.log(result);
            }
        });
    }
    function handleUnenroll(): void {
        console.log("unenroll");
        unenrollInEvent({eventId}).then((result) => {
            if(result){
                console.log(result);
            }
        });
    }

    function openMap(): void {
        //open google maps with event location
        const url = `https://www.google.com/maps/search/?api=1&query=${event.location}`;
        window.open(url, '_blank');
    }

    return ( 
        <div>
              <div className="overlay absolute inset-0 bg-gray-900 opacity-60"></div>
            <div style={{backgroundImage: `url(${event.image2 != undefined ? event.image2 : event.image})`,backgroundSize: 'cover', backgroundPosition: 'center', width:'100vw'}} className="p-0">
                <FontAwesomeIcon style={{ zIndex: 10, position: 'absolute', top: '5em', left: '2em', color:'white', margin:"1em"}} icon={faChevronLeft} onClick={() => navigate(-1)}/>
                {!isEnrolled||isOwner ? null:<button onClick={()=> handleUnenroll()} className="bg-[#4B2E83] rounded-full px-4 py-2 text-white font-bold" style={{ zIndex: 10, position: 'absolute', top: '5em', right: '2em', margin:"1em"}}>Unenroll</button>}
                {/** profile picture just below unenroll button on top right */}
                <div style={{ zIndex: 10, position: 'absolute', top: '28%', right: '2em', margin:"1em"}}>
                    <img className="rounded-full w-16 h-16" src={ownerImage} alt="profile picture" />
                </div>
                <div className="min-h-screen flex flex-col ">
                    <h2 className="font-semibold text-2xl mt-6 text-left text-white"
                    style={{ zIndex: 10, position: 'absolute', top: '30%', left: '40%', transform: 'translate(-50%, -50%)'}}>
                    {event.title}
                    </h2>
                    <div style={{ zIndex: 10, position: 'absolute', top: '40%', left: '12%', display: 'flex', alignItems: 'center', fontWeight:'bold'}}>
                        <FontAwesomeIcon icon={faCalendarDays} size="lg" className="mr-2 text-white mb-1" />
                        <h3 style={{ color:'#DEE1E6'}}>{new Date(event.startDate).toLocaleDateString(undefined,dateOptions)}</h3>
                    </div>
                    <h4 style={{ zIndex: 10, position: 'absolute', top: '43.5%', left: '18%', color:'#BCC1CA', fontSize:'14px'}}>{new Date(event.startDate).toLocaleDateString(undefined,dayOptions)}</h4>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', top: '40%', left: '50%', display: 'flex', alignItems: 'center', color:'white', fontWeight:'bold'}}>
                    <FontAwesomeIcon className="mr-3" icon={faClock} />
                    <h3>{new Date(event.startDate).toLocaleTimeString(undefined, timeOptions)}</h3>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', top: '43%', left: '58%', display: 'flex', alignItems: 'center', color:'#DEE1E6'}}>
                    <h4>to {new Date(event.endDate).toLocaleTimeString(undefined, timeOptions)}</h4>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', top: '50%', left: '12%', display: 'flex', alignItems: 'center', textAlign:'left' }}>
                    <FontAwesomeIcon icon={faLocationDot} size="lg" className="mr-2 text-white mb-1" />
                    <h3 style={{ color:'#DEE1E6', maxWidth: '150px' }}>{event.location}</h3>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', top: '50%', left: '60%', display: 'flex', alignItems: 'center'}}>
                <button onClick={()=> openMap()} className="bg-[#4B2E83] rounded-full px-4 py-2 text-white font-bold">Map</button>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', top: '60%', left: '12%', display: 'flex', alignItems: 'center', textAlign:'left' }}>
                    <h3 style={{ color:'#DEE1E6', maxWidth: '300px'}}>{event.description}</h3>
                </div>

                <div style={{ zIndex: 10, position: 'absolute', bottom: '65px', left: '0', width: '100vw', height:'6rem', display: 'flex', alignItems: 'center', backgroundColor: 'white', color: 'grey'}}>
                    <h4 className="z-10 text-grey mr-5 ml-5">{event.attendees}/{event.maxAttendees}</h4>
                    <div className="flex -space-x-2 overflow-hidden">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                <div style={{ justifySelf: 'end' }}>
                    <button onClick={()=> navigator.share({title: event.title, text:event.description, url: window.location.href})} className="bg-transparent border-2 border-[#4B2E83] px-3 py-1 text-purple font-bold rounded-full ml-20">
                    Invite
                    </button>
                </div>


                </div>





                <div style={{ zIndex: 10, position: 'absolute', bottom: '0', left: '0', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <button onClick={()=> handleEnroll()} className="bg-[#4B2E83] px-8 py-5 text-white font-bold w-full">
                        {isEnrolled? "Already Enrolled": "Enroll"}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default EventInformation;
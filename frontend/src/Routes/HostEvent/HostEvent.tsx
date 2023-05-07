import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { EventDetails } from "../../scripts/types";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createEvent, storage } from "../../scripts/firebase";
import { userContext } from "../../Root";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router";


function HostEventForm() {
  const [eventName, setEventName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [ageLimit, setAgeLimit] = useState<string>('');
  const [maxAttendees, setMaxAttendees] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [eventImage, setEventImage] = useState<File|null>(null);
  const [eventDescription, setEventDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date|null>(null);
  const [eventStartTime, setEventStartTime] = useState<Date|null>(null);
  const [eventEndTime, setEventEndTime] = useState<Date|null>(null);
  const {user} = useContext(userContext);
  const navigate = useNavigate();
  const handleTagSelection = (tag:string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleImageUpload = (event : any) => {
    setEventImage(event.target.files[0]);
  };

  const handleSubmit = (event : any) => {
    event.preventDefault();
    if (eventImage === null) {
        alert("Please upload an image");
        return;
    }

    // handle form submission here
    //upload image to firebase storage
    const imageId = uuidv4();
    let imageURL = "";
    const storageRef = ref(storage, `images/${user.uid+"_"+imageId+"_"+eventImage.name}`);

    const uploadTask = uploadBytesResumable(storageRef, eventImage);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                console.log('Upload is paused');
                break;
                case 'running':
                console.log('Upload is running');
                break;
            }
        }, 
        (error) => {
            // Handle unsuccessful uploads
            console.warn("upload failed", error)
        }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                imageURL = downloadURL;
                //get image url
                const eventDetails : EventDetails = {
                    id: "",
                    title: eventName,
                    hostId: "",
                    attendees: 0,
                    maxAttendees: parseInt(maxAttendees),
                    image: imageURL,
                    location: location,
                    startDate: (selectedDate?.toISOString().slice(0, 10)+"T"+eventStartTime?.toISOString().slice(11, 19)+"Z"),
                    endDate: (selectedDate?.toISOString().slice(0, 10)+"T"+eventEndTime?.toISOString().slice(11, 19)+"Z"),
                    description: eventDescription,
                }
                console.log(eventDetails);
                console.log("ready for function call");
                createEvent({event:eventDetails}).then((response :any ) => {
                    console.log(response);
                    response.data
                    navigate(`/event_details/${response.data.eventId}`)
                }).catch((error : any) => {
                    console.warn(error);
                });
            });
        }
    );
    
  };

  return (
    <div className="host-event-form p-7 text-purple-900 pb-24">

      <div className="host-event-form__header mt-4 mb-2 flex justify-between">
        <h1 className="host-event-form__title text-4xl font-bold text-start UWPurple">Host Event</h1>
        <a className="rounded-full UWPurpleBG p-1.5 text-white hover:bg-transparent focus:outline-none "
                href="#"
                >
                <span className="sr-only"> Random </span>

                <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    viewBox="-1 -1 27 27"
                >
<path d="M18 9.064a3.049 3.049 0 0 0-.9-2.164 3.139 3.139 0 0 0-4.334 0L.9 18.769A3.064 3.064 0 0 0 5.23 23.1L17.1 11.231a3.047 3.047 0 0 0 .9-2.167zM3.816 21.688a1.087 1.087 0 0 1-1.5 0 1.062 1.062 0 0 1 0-1.5l7.769-7.77 1.505 1.505zM15.688 9.816 13 12.505 11.5 11l2.689-2.688a1.063 1.063 0 1 1 1.5 1.5zM4.863 2.855l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29l-1.55.442-.442 1.55a1.191 1.191 0 0 1-2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29zm18.274 14.29-1.55.442-.442 1.55a1.191 1.191 0 0 1-2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29zM17.755 2.5l1.356-.387L19.5.755a1.042 1.042 0 0 1 2 0l.387 1.356 1.356.387a1.042 1.042 0 0 1 0 2l-1.356.387-.387 1.359a1.042 1.042 0 0 1-2 0l-.387-1.355-1.358-.389a1.042 1.042 0 0 1 0-2z"/>                </svg>
                </a>
        <button onClick={(e)=>handleSubmit(e)} className="host-event-form__save-btn UWPurpleBG bg-purple-900 text-white rounded px-3 py-1 text-end text-sm">Save Event</button>
      </div>
        
        <div className="host-event-form__container" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <div className="flex">

            <div className="host-event-form__section mt-4">
                <h2 className="host-event-form__section-title UWPurple text-sm text-left">Event Name</h2>
                <input
                className="host-event-form__input custom-input border-2 border-gray-300 rounded-lg p-1"
                type="text"
                placeholder="Ex. Study Sesh..."
                value={eventName}
                onChange={(event) => setEventName(event.target.value)}
                />
            </div>
        </div>
        <div className="host-event-form__section mt-4">
            <h2 className="host-event-form__section-title UWPurple text-sm text-left">Location</h2>
            <input
            className="host-event-form__input custom-input border-2 border-gray-300 rounded-lg p-1"
            type="text"
            placeholder="Ex. Seattle, WA"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            />
        </div>

        <div className="flex mt-4">
            <div className="host-event-form__section">
                <h2 className="host-event-form__section-title UWPurple text-sm text-left">
                    Date
                </h2>
                <DatePicker
                    className="host-event-form__input custom-input border-2 border-gray-300 rounded-lg p-1"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date? date : new Date())}
                    placeholderText="Click to select a date"
                    dateFormat="MM/dd/yyyy"
                />
            </div>
        </div>

        <div className="flex mt-4 flex-col">
            <div className="flex-grow">
                <h2 className="host-event-form__section-title UWPurple text-sm text-left">
                    Event Start Time
                </h2>
                <DatePicker
                    className="host-event-form__input custom-input border-2 border-gray-300 rounded-lg p-1"
                    selected={eventStartTime}
                    onChange={(time) => setEventStartTime(time? time : new Date())}
                    placeholderText="Select a time"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    isClearable
                />
            </div>
            <div className="flex-grow mt-4">
                <h2 className="host-event-form__section-title UWPurple text-sm text-left">
                    Event End Time
                </h2>
                <DatePicker
                    className="host-event-form__input custom-input border-2 border-gray-300 rounded-lg p-1"
                    selected={eventEndTime}
                    onChange={(time) => setEventEndTime(time? time : new Date())}
                    placeholderText="Select a time"
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    isClearable
                />
            </div>
        </div>


        <div className="host-event-form__section mt-4">
            <h2 className="host-event-form__section-title UWPurple text-sm text-left">Age Limit</h2>
            <select
            className="host-event-form__input custom-input border-2 border-gray-300 rounded-lg p-1"
            value={ageLimit}
            onChange={(event) => setAgeLimit(event.target.value)}
            > 
            <option value="">Select Age Limit</option>
            <option value="18+">18+</option>
            <option value="21+">21+</option>
            </select>
        </div>
        <div className="host-event-form__section mt-4">
            <h2 className="host-event-form__section-title UWPurple text-sm text-left">Max Attendees</h2>
            <input
            className="host-event-form__input custom-input border-2 border-gray-300 rounded-lg p-1"
            type="number"
            value={maxAttendees}
            onChange={(event) => setMaxAttendees(event.target.value)}
            />
        </div>
        </div>

        {/* event tags */}
        <div className="host-event-form__section mt-3">
          <h2 className="host-event-form__section-title UWPurple text-sm text-left mb-2">Tags</h2>
          <div className="host-event-form__tags flex">
            <span
                className={`whitespace-nowrap rounded-full px-2 py-0.5 text-xs mr-2 ${selectedTags.includes('parties') ? 'UWGoldForBG UWGold bg-amber-300' : 'badgeUnselected bg-gray-200'}`}
                onClick={() => handleTagSelection('parties')}
            >
            Parties
            </span>
            <span
                className={`whitespace-nowrap rounded-full px-2 py-0.5 text-xs mr-2 ${selectedTags.includes('Beach') ? 'UWGoldForBG UWGold bg-amber-300' : 'badgeUnselected bg-gray-200'}`}
                onClick={() => handleTagSelection('Beach')}
            >
            Beach
            </span>
            <span
                className={`whitespace-nowrap rounded-full px-2 py-0.5 text-xs mr-2 ${selectedTags.includes('Study') ? 'UWGoldForBG UWGold bg-amber-300' : 'badgeUnselected bg-gray-200'}`}
                onClick={() => handleTagSelection('Study')}
            >
            Study
            </span>
            <span
                className={`whitespace-nowrap rounded-full px-2 py-0.5 text-xs mr-2 ${selectedTags.includes('Potluck') ? 'UWGoldForBG UWGold bg-amber-300' : 'badgeUnselected bg-gray-200'}`}
                onClick={() => handleTagSelection('Potluck')}
            >
            Potluck
            </span>
        </div>
        </div>

        {/* event image */}
        <div className="host-event-form__section mt-4 max-w-fit">
            <h2 className="host-event-form__section-title UWPurple text-sm text-left mb-2">Event Image</h2>
            <div className="host-event-form__image text-left bg-purple-900 rounded-lg px-3 py-2">
                <label htmlFor="image-upload" className="UWPurpleBG text-white rounded px-2.5 py-1 text-end text-xs inline-flex">
                <span style={{ display: "inline-flex", alignItems: "center", fontSize:"1rem" }}>Upload</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" fill="#ffffff" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M17.974 7.146a1.032 1.032 0 0 1-.742-.569c-1.55-3.271-5.143-5.1-8.734-4.438A7.946 7.946 0 0 0 2.114 8.64a8.13 8.13 0 0 0 .033 2.89c.06.309-.073.653-.346.901A5.51 5.51 0 0 0 0 16.501c0 3.032 2.467 5.5 5.5 5.5h11c4.136 0 7.5-3.364 7.5-7.5 0-3.565-2.534-6.658-6.026-7.354ZM16.5 20h-11C3.57 20 2 18.43 2 16.5a3.51 3.51 0 0 1 1.146-2.59c.786-.715 1.155-1.773.963-2.763a6.142 6.142 0 0 1-.024-2.181c.403-2.422 2.365-4.421 4.771-4.862.385-.07.768-.104 1.146-.104a5.95 5.95 0 0 1 5.422 3.434 3.013 3.013 0 0 0 2.158 1.673 5.51 5.51 0 0 1 4.417 5.394c0 3.032-2.468 5.5-5.5 5.5Zm-1.379-7.707a.999.999 0 1 1-1.414 1.414L12 12v5a1 1 0 1 1-2 0v-5l-1.707 1.707a.999.999 0 1 1-1.414-1.414l2.707-2.707a1.99 1.99 0 0 1 1.4-.583L11 9l.014.003a1.989 1.989 0 0 1 1.4.583l2.707 2.707Z"/></svg>
                <input
                    id="image-upload"
                    name="image-upload"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e)=>handleImageUpload(e)}
                    
                />
                </label>
            </div>
        </div>

        {/* event desctiption */}
        <div className="host-event-form__section text-left mt-3">
            <div className='flex'>
            <h2 className="host-event-form__section-title UWPurple text-sm mb-2">
                Event Description
            </h2>
            <button onClick={() => setEventDescription("This is a contest of skill on dune buggys, the best time around the track wins $100!")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 mb-2" fill="#b7a57a" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M18 9.064a3.049 3.049 0 0 0-.9-2.164 3.139 3.139 0 0 0-4.334 0L.9 18.769A3.064 3.064 0 0 0 5.23 23.1L17.1 11.231a3.047 3.047 0 0 0 .9-2.167zM3.816 21.688a1.087 1.087 0 0 1-1.5 0 1.062 1.062 0 0 1 0-1.5l7.769-7.77 1.505 1.505zM15.688 9.816 13 12.505 11.5 11l2.689-2.688a1.063 1.063 0 1 1 1.5 1.5zM4.863 2.855l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29l-1.55.442-.442 1.55a1.191 1.191 0 0 1-2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29zm18.274 14.29-1.55.442-.442 1.55a1.191 1.191 0 0 1-2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29zM17.755 2.5l1.356-.387L19.5.755a1.042 1.042 0 0 1 2 0l.387 1.356 1.356.387a1.042 1.042 0 0 1 0 2l-1.356.387-.387 1.359a1.042 1.042 0 0 1-2 0l-.387-1.355-1.358-.389a1.042 1.042 0 0 1 0-2z"/></svg>
            </button>
            </div>
            <textarea
                className="host-event-form__textarea custom-input border-2 border-gray-300 rounded-lg p-1 min-w-full"
                placeholder="You can use our magic tool AI to have it write a description for you..."
                rows={5}
                value={eventDescription}
                onChange={(event) => setEventDescription(event.target.value)}
            />
        </div>
    </div>
);
}

export default HostEventForm;
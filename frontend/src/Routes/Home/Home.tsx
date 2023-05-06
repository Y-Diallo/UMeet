
import "../../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
function Home() {
    return ( 

        <>
        <div className="text-left min-h-screen m-0">
        <div className="mb-4 flex items-center">
            <div>
            <h2 className="font-semibold text-2xl mt-6">Welcome Back</h2>
            <h3 className="leading-7 font-sans text-purple-900 font-normal">Alexander Hoff</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt="Profile icon" className="w-12 h-12 ml-auto rounded-full mr-2 mt-4" />
        </div>

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

        <div className="max-w-xs mt-3 -ml-2">
            <div className="max-w-xs flex">
                <span className="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 rounded-full px-4 py-2 flex-row-reverse" style={{flexGrow: 0, flexShrink: 1}}>
                    <span className="pl-2">Business</span>
                    <FontAwesomeIcon icon={faBriefcase} />
                </span>

                <span className="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 rounded-full px-4 py-2 flex-row-reverse" style={{flexGrow: 0, flexShrink: 1}}>
                    <span className="pl-2">Parties</span>
                    <FontAwesomeIcon icon={faChampagneGlasses} />
                </span>
            </div>
        </div>

        <div className="flex justify-between">
            <h3 className="leading-7 font-sans font-normal mt-3">Popular Events</h3>
            <a href="#" className="text-sm text-purple-900 mt-auto">See More</a>
            {/**Add card here*/}
        </div>

        <div className="flex justify-between">
            <h3 className="leading-7 font-sans font-normal mt-3">Nearby Event</h3>
            <a href="#" className="text-sm text-purple-900 mt-auto">See Details</a>
            {/**Add card here*/}
        </div>
        {/* Use forloop here in future to itterate through all instances of events */}

        {/* Card 1 */}
        <a
            href="#"
            className="block rounded-lg p-1 shadow-sm shadow-indigo-100 bg-white shadow-md mt-6 pt-40"
            style={{
                backgroundImage: `url('https://media.discordapp.net/attachments/973821179888562276/1104265496670503002/Image_4715.png')`,
                height: "28vh", // set the height to full viewport height
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* title container */}
            <div className="mx-auto rounded-lg bg-white shadow-lg py-2 px-4">
            {/* event title */}
            <div className="flex items-center justify-start">
                <h1 className="text-sm text-gray-800">Junior Bonfire Get Together</h1>
            </div>
            {/* attendee count */}

            <div className="flex items-center justify-start mt-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1 ml-1"
                fill="#000000"
                viewBox="-1 -2 26 26"
                stroke="#000000"
            >
            <path d="M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6 6 0 0 0-12 0 1 1 0 0 0 2 0 4 4 0 0 1 8 0 1 1 0 0 0 2 0Zm0-15a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 2 0ZM6 8a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2ZM2 15a4 4 0 0 1 4-4 1 1 0 0 0 0-2 6.006 6.006 0 0 0-6 6 1 1 0 0 0 2 0Z"/>
            </svg>
            <dt className="sr-only">Attendees</dt>
            <dd className="text-sm text-gray-500">30/40</dd>
            <div className="text-gray-500 text-sm font-medium ml-auto">
                May 10, 2023
            </div>
            </div>

            

            {/* event date */}
            </div>

        </a>

         {/* Card 2 */}
         <a
            href="#"
            className="block rounded-lg p-1 shadow-sm shadow-indigo-100 bg-white shadow-md mt-6 pt-40"
            style={{
                backgroundImage: `url('https://media.discordapp.net/attachments/973821179888562276/1104265496670503002/Image_4715.png')`,
                height: "28vh", // set the height to full viewport height
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* title container */}
            <div className="mx-auto rounded-lg bg-white shadow-lg py-2 px-4">
            {/* event title */}
            <div className="flex items-center justify-start">
                <h1 className="text-sm text-gray-800">Junior Bonfire Get Together</h1>
            </div>
            {/* attendee count */}

            <div className="flex items-center justify-start mt-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1 ml-1"
                fill="#000000"
                viewBox="-1 -2 26 26"
                stroke="#000000"
            >
            <path d="M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6 6 0 0 0-12 0 1 1 0 0 0 2 0 4 4 0 0 1 8 0 1 1 0 0 0 2 0Zm0-15a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 2 0ZM6 8a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2ZM2 15a4 4 0 0 1 4-4 1 1 0 0 0 0-2 6.006 6.006 0 0 0-6 6 1 1 0 0 0 2 0Z"/>
            </svg>
            <dt className="sr-only">Attendees</dt>
            <dd className="text-sm text-gray-500">30/40</dd>
            <div className="text-gray-500 text-sm font-medium ml-auto">
                May 10, 2023
            </div>
            </div>

            

            {/* event date */}
            </div>

        </a>
        </div>

        {/* Card 3 */}
        <a
            href="#"
            className="block rounded-lg p-1 shadow-sm shadow-indigo-100 bg-white shadow-md mt-6 pt-40"
            style={{
                backgroundImage: `url('https://media.discordapp.net/attachments/973821179888562276/1104265496670503002/Image_4715.png')`,
                height: "28vh", // set the height to full viewport height
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* title container */}
            <div className="mx-auto rounded-lg bg-white shadow-lg py-2 px-4">
            {/* event title */}
            <div className="flex items-center justify-start">
                <h1 className="text-sm text-gray-800">Junior Bonfire Get Together</h1>
            </div>
            {/* attendee count */}

            <div className="flex items-center justify-start mt-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1 ml-1"
                fill="#000000"
                viewBox="-1 -2 26 26"
                stroke="#000000"
            >
            <path d="M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6 6 0 0 0-12 0 1 1 0 0 0 2 0 4 4 0 0 1 8 0 1 1 0 0 0 2 0Zm0-15a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 2 0ZM6 8a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2ZM2 15a4 4 0 0 1 4-4 1 1 0 0 0 0-2 6.006 6.006 0 0 0-6 6 1 1 0 0 0 2 0Z"/>
            </svg>
            <dt className="sr-only">Attendees</dt>
            <dd className="text-sm text-gray-500">30/40</dd>
            <div className="text-gray-500 text-sm font-medium ml-auto">
                May 10, 2023
            </div>
            </div>

            

            {/* event date */}
            </div>

        </a>
        </>

    );
}

export default Home;
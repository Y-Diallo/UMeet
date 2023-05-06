import "../../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
function Home() {
    return ( 

        <div className="text-left min-h-screen m-0">
        <div className="mb-4 flex items-center">
            <div>
            <h2 className="font-semibold text-2xl mt-6">Welcome Back</h2>
            <h3 className="leading-7 font-sans text-purple-900 font-normal">Alexander Hoff</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt="Profile icon" className="w-10 h-10 ml-auto rounded-full mr-2" />
        </div>

        <label className="relative block mt-6">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faSearch} />
        </span>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-3 pl-10 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Music event, Parties..." type="text" name="search"/>
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
        </div>




    );
}

export default Home;
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCompass, faTicket, faGear } from '@fortawesome/free-solid-svg-icons'

const navbarPages : string[] = ["home", "search", "events", "settings", "event_details"];

function Navbar() {
  const page = useLocation().pathname.split('/')[1];
  if (!navbarPages.some((p) => p.includes(page)) && page != "") {
    return null;
  }
  return (
    <nav className="fixed bottom-0 left-0 w-full text-white bg-white">
      <ul className="flex justify-between px-8 py-8">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
              <FontAwesomeIcon className="text-purple-900 text-lg"
               style={page == "home" ? {color:'#B7A57AFF'}:{}} icon={faHouse} />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/search" className="nav-link">
              <FontAwesomeIcon className="text-purple-900 text-lg"
              style={page == "search" ? {color:'#B7A57AFF'}:{}} icon={faCompass} />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-link">
              <FontAwesomeIcon className="text-purple-900 text-lg"
              style={page == "events" ? {color:'#B7A57AFF'}:{}} icon={faTicket} />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
              <FontAwesomeIcon className="text-purple-900 text-lg"
              style={page == "settings" ? {color:'#B7A57AFF'}:{}} icon={faGear} />
          </Link>
        </li>
      </ul>
    </nav>
  );
  }
  

export default Navbar;

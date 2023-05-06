import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCompass, faTicket, faGear } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    return (
      <nav className="fixed bottom-0 left-0 w-full text-white">
        <ul className="flex justify-between px-8 py-8">
          <li className="nav-item">
            <Link to="/" className="nav-link">
                <FontAwesomeIcon className="text-lg" style={{color:'#B7A57AFF'}} icon={faHouse} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
                <FontAwesomeIcon className="text-purple-900 text-lg" icon={faCompass} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
                <FontAwesomeIcon className="text-purple-900 text-lg" icon={faTicket} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
                <FontAwesomeIcon className="text-purple-900 text-lg" icon={faGear} />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  

export default Navbar;

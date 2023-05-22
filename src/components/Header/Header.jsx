import { Link} from 'react-router-dom'
import './style.css'

export const Header = () => {
    return (
        <header className='sticky'>
        <nav className='menu'>
          <ul className='menu-list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li>Movies</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
}
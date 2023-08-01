import { Link} from 'react-router-dom'
import './style.css'

export const Header = () => {
    return (
        <header className='sticky'>
        <nav className='menu'>
          <ul className='menu-list'>
            <li><Link to='/'>Início</Link></li>
            <li><Link to="/explore">Acervo</Link></li>
            <li>Sobre mim</li>
            <li><Link to='/contact'>Contato</Link></li>
          </ul>
        </nav>
      </header>
    )
}
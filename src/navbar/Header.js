import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../asset/Corestone.png'

const Header = () => {
    return (
        <header className=' container mx-auto'> 
          <div className=" bg-gray-200 nav-area rounded-lg">
            <Link to="/" className="logo">
              <img src={logo} width={140} alt="logo" className='hover:scale-105'/>
            </Link>
            <Navbar />
        </div>
        <hr className='border-3 border-gray-700 border-opacity-50'/>
        </header>
      );
}

export default Header
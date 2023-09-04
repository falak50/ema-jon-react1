import './Header.css'
//mport logo from '../../images/favicon.ico'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    console.log(user);
    const handleLogout = () =>{
        logOut()
        .then(r => {
            console.log('log out done');
        })
        .catch(e => {
            console.log(e);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
          <div>
                  <Link to="/">Shop</Link>
                  <Link to="/orders">Orders</Link>
                  <Link to="/invertory">Inventory</Link>
                  <Link to="login">Login</Link>
                  <Link to="singup">Sing Up</Link>
                  {user && <span>welcome {user.email}
                  <button onClick={handleLogout}>Sign out</button>
                  </span> }
          </div>
        </nav>
    );
};

export default Header;
import './Header.css'
//mport logo from '../../images/favicon.ico'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
          <div>
          <a href="/shop">Shop</a>
            <a href="/oder">Oder</a>
            <a href="/invertory">Inventory</a>
            <a href="login">logIn</a>
          </div>
        </nav>
    );
};

export default Header;
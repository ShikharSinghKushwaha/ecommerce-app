import React , {useState} from 'react'
import { NavLink }from 'react-router-dom'
import './Navbar.css'
function TopBar(){

    const [ menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }
    return(
        <div>
            <header>
                <nav>
                    <div className='navbar_container'>
                        <div className='child_container'>
                        <div className='logo'>
                          <NavLink to="/" style={{textDecoration:'none',color:'black'}}><h3>Online<br/>Store.com</h3></NavLink>
                        </div>
                        <button onClick={handleMenu} className='menu'>Menu</button>

                       <div className='links-container bigscreen'>
                            <NavLink to='/' className='nav-link blinker-regular'>Home</NavLink> 
                            <NavLink to="/categories/electronics"  activeClassName='active' className='nav-link blinker-regular'>Categories
                            </NavLink>
                            <NavLink to="/allproducts" activeClassName='active' className='nav-link blinker-regular'>AllProduct</NavLink>

                            <NavLink to="/cart" activeClassName='active' className='nav-link blinker-regular'>Cart</NavLink>

                        </div>

{menu && <div className=' small-screen'>
                            <NavLink to='/' className='nav-link blinker-regular'>Home</NavLink> 
                            <NavLink to="/categories/electronics"  activeClassName='active' className='nav-link blinker-regular'>Categories
                            </NavLink>
                            <NavLink to="/allproducts" activeClassName='active' className='nav-link blinker-regular'>AllProduct</NavLink>

                            <NavLink to="/cart" activeClassName='active' className='nav-link blinker-regular'>Cart</NavLink>

                        </div>
}
                        </div>
                        
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default TopBar
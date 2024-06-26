import React, { useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext} from 'react-icons';
import { useUserAuth } from "../context/userAuthContext";



function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const { logOut } = useUserAuth();
    const logOutN = async (e) => {

      await logOut();

  };

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
        <Link to="#" >
         <FaIcons.FaBars className='menu-bars' onClick={showSidebar} />
        
        </Link>

        <Link to="#" >
        
        <AiIcons.AiOutlineLogin className='logout' onClick={logOutN} />
       </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
      </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar;

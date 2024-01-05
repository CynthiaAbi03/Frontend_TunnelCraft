import React, { ReactNode, useState } from 'react'
import { GoHome} from "react-icons/go";
import { BsRocket } from "react-icons/bs";
import {TbArrowsExchange } from "react-icons/tb";
import { CiLock } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Logo from '../../assets/images/TunnelCraft.png'
import { IoMenu } from "react-icons/io5";
import { log } from 'console';
import './sidebar.css'
import { NavLink } from 'react-router-dom';

type SidebarProps = {
    children: ReactNode;
  };
  
  const Sidebar = ({ children}: SidebarProps): JSX.Element => {

  const [isButtonClicked, setIsButtonClicked] = useState(true);
  const [isDropdown, setIsDropdown] = useState(false);
  const toggle = () => {
    setIsButtonClicked(!isButtonClicked);
  }

  const userButton = () => {
    setIsDropdown(!isDropdown);
  }

    const menuItems = [
        {
            path: '/acceuil',
            name: 'Acceuil',
            icon: <GoHome/>
        },
        {
            path: '/commencer',
            name: 'Commencer',
            icon: <BsRocket/>
        },
        {
            path: '/applications',
            name: 'Vos Applications',
            icon: <TbArrowsExchange/>
        },
        {
            path: '/token',
            name: 'Votre Token',
            icon: <CiLock/>
        },
        {
            path: '/facturation',
            name: 'Abonnements',
            icon: <MdOutlinePayment/>
        }
    ]
  return (
    <div className='container'>
        <div className="header ">
            <div className="icons1">
                <IoMenu onClick={toggle}  className='hamburger-menu'/>
                <img src={Logo} alt="" />
            </div>
            <div className='hover-element'>
                <FaUser onClick={userButton} className='user_icon images'/>
                { isDropdown && (
                <div className='User-details'>
                    <p>abicynthia@gmail.com</p>
                    <a href="">Parametres</a>
                </div>
                    )}
            </div>      
        </div>
        <div className="page_content">
        <div style={{width: isButtonClicked? "300px": "80px"}} className="sidebar">
            <div>
            {
                menuItems.map((item, index)=>(
                    <NavLink to={item.path} key={index} className='link'>
                        <div className="icons2">{item.icon}</div>
                        <div className="link_text" style={{display: isButtonClicked? 'block': 'none'}}>{item.name}</div>
                    </NavLink>

                ))

            }
            </div>
            <div className='Name-icon'>
                <p>A</p>
                <p style={{display: isButtonClicked? 'block': 'none'}}>abicynthia@gmail.com</p>
            </div>
        </div>
        <main>{children}</main>
        </div>


    </div>
  )
}

export default Sidebar
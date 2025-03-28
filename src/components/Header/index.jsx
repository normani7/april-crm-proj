import { Button } from 'primereact/button';
import React, { useState } from "react"; 
import { Menubar } from 'primereact/menubar';
import { MenuSidebar } from '../SideBar/index.jsx';
import { HEADER_NAV_ITEMS } from './constants';       
import './index.css';
import { DataView } from 'primereact/dataview';


const Header = () => {
    
    const [IsOpenMenu, setIsOpenMenu] = useState(false)

    const handleclick = () =>{
        setIsOpenMenu()
    }

    const onClick = () => {
        console.log('Logout');
    }
    
    const LogoutButtonTemplate = (
        <Button  
            onClick={onClick}
            rounded
            icon="pi pi-sign-out"
            severity="help"
        />
    )
    const MenuButtonTemplate = (
        <Button  
            text
            rounded
            icon="pi pi-bars"
            onClick={onClick}
        />
    )

    return (
        <>
        <header className="header">
            <div className="container">
                <Menubar
                    start={MenuButtonTemplate} 
                    end={LogoutButtonTemplate} 
                />
            </div>
            <MenuSidebar visible={IsOpenMenu} setIsOpenMenu={setIsOpenMenu}
            />
        </header>
        </>
    )
}

export default Header;
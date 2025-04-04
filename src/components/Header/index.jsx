import { Button } from 'primereact/button';
import React, { useState } from "react"; 
import { Menubar } from 'primereact/menubar';
import { MenuSidebar } from '../SideBar/index.jsx';      
import './index.css';


const Header = () => {
    
    const [isOpenMenu, setIsOpenMenu] = useState(false)


    const openSideBar = () => {
        setIsOpenMenu(true)
        console.log('Logout');
    }
    
    const LogoutButtonTemplate = (
        <Button  
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
            onClick={openSideBar}
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
            <MenuSidebar visible={isOpenMenu} setVisible={setIsOpenMenu}
            />
        </header>
        </>
    )
}

export default Header;
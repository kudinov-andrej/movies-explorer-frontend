import React from 'react';
import './Header.css';
import Logo from "../../images/headerLogo.svg";
import PopapNavBar from '../PopapNavBar/PopapNavBar.jsx';
import Navigation from '../Navigation/Navigation';

function Header(props) {


    return (
        <>
            <header className='header'>
                <img className="header__logo" src={Logo} alt='логотип сайта'></img>
                <Navigation
                    handleСhangePopapNavBar={props.handleСhangePopapNavBar}
                    isOpenPopapNavBar={props.isOpenPopapNavBar}
                    islogin={props.islogin}
                />
            </header>
            <PopapNavBar
                isOpenPopapNavBar={props.isOpenPopapNavBar}
                handleСhangePopapNavBar={props.handleСhangePopapNavBar}
            />
        </>
    );
}

export default Header;


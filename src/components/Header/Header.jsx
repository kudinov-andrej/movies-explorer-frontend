import React from 'react';
import './Header.css';
import PopapNavBar from '../PopapNavBar/PopapNavBar.jsx';
import Navigation from '../Navigation/Navigation';
import Logotip from '../Logotip/Logotip';

function Header(props) {


    return (
        <>
            <header className='header'>
                <Logotip />
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


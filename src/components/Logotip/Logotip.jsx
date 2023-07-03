import React from 'react';
import { Link } from 'react-router-dom';
import './Logotip.css';
import Logo from "../../images/headerLogo.svg";


function Logotip(props) {


    return (
        <Link className="header__link" to="/">
            <img className="header__logo" src={Logo} alt='логотип сайта'></img>
        </Link>
    );
}

export default Logotip;
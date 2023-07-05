import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        if (props.islogin) {
            setName(currentUser.name);
            setEmail(currentUser.email);
        }
    }, [props.islogin, currentUser]);

    function handleNameChange(evt) {
        setName(evt.target.value)
    }

    function handleEmailChange(evt) {
        setEmail(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser({
            name,
            email,
        });
    }

    const closePage = () => {
        props.logOut();
    }

    return (
        <>
            <Header
                handleСhangePopapNavBar={props.handleСhangePopapNavBar}
                isOpenPopapNavBar={props.isOpenPopapNavBar}
                islogin={props.islogin}
            />
            <section className="profile">
                <h2 className='profile__title'>Привет, {props.islogin ? currentUser.name : ""}!</h2>
                <form class="profile-form" action="#" name="profile-form" onSubmit={handleSubmit}>
                    <fieldset className='profile-form__fieldset'>
                        <div className='profile-form__input-conteiner'>
                            <label className='profile-form__label' for='profile-form__input-name'>Имя</label>
                            <input type="text" id="profile-form__input-name" className="profile-form__input" value={props.islogin ? name : ""} name="name" required minlength="2" maxlength="30" onChange={handleNameChange} />
                        </div>
                        <div className='profile-form__input-conteiner'>
                            <label className='profile-form__label' for='profile-form__input-email'>E-mail</label>
                            <input type="email" id="profile-form__input-email" className="profile-form__input" value={props.islogin ? email : ""} name="email" required onChange={handleEmailChange} />
                        </div>
                    </fieldset>
                    <span className="profile-form__error profile-form__input-{tupe-error}"></span>
                    <button className='profile-form__button profile-form__button_type_chenge' type='submit'>Изменить</button>
                </form>
                <buttom className='profile-form__button profile-form__button_type_exit' type='button' onClick={closePage}>Выйти из акаунта</buttom>
            </section>
        </>
    );
}

export default Profile;
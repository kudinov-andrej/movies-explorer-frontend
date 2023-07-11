import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from '../UseFormValidation/useFormValidation';

function Profile(props) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        if (props.islogin) {
            resetForm({
                name: currentUser.name,
                email: currentUser.email,
            });
        }
    }, [props.islogin, currentUser]);

    function handleSubmit(evt) {
        evt.preventDefault();
        if (isValid) {
            props.onUpdateUser(values);
        }
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
                            <input type="text"
                                id="profile-form__input-name"
                                className="profile-form__input"
                                value={props.islogin ? values.name : ""}
                                name="name"
                                required minlength="2"
                                maxlength="30"
                                onChange={handleChange} />
                        </div>
                        <span className="profile-form__error">{errors.name}</span>
                        <div className='profile-form__input-conteiner'>
                            <label className='profile-form__label' for='profile-form__input-email'>E-mail</label>
                            <input type="email"
                                id="profile-form__input-email"
                                className="profile-form__input"
                                value={props.islogin ? values.email : ""}
                                name="email"
                                required
                                pattern="([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+"
                                onChange={handleChange} />
                        </div>
                        <span className="profile-form__error">{errors.email}</span>
                    </fieldset>
                    <span className="profile-form__error profile-form__error_server">{props.errorServerMessage}</span>
                    <span className="profile-form__error profile-form__error_ssuccessful">{props.ssuccessfulResponseServer}</span>
                    <button className={`profile-form__button ${!isValid ? 'profile-form__button_disabled' : ''}`} type='submit' disabled={!isValid}>Изменить</button>
                </form>
                <buttom className='profile-form__button profile-form__button_type_exit' type='button' onClick={closePage}>Выйти из акаунта</buttom>
            </section>
        </>
    );
}

export default Profile;
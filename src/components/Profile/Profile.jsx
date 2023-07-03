import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile(props) {

    return (
        <>
            <Header
                handleСhangePopapNavBar={props.handleСhangePopapNavBar}
                isOpenPopapNavBar={props.isOpenPopapNavBar}
                islogin={props.islogin}
            />
            <section className="profile">
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <form class="profile-form" action="#" name="profile-form">
                    <fieldset className='profile-form__fieldset'>
                        <div className='profile-form__input-conteiner'>
                            <label className='profile-form__label' for='profile-form__input-name'>Имя</label>
                            <input type="text" id="profile-form__input-name" className="profile-form__input" value="Василий" name="name" required minlength="2" maxlength="30" />
                        </div>
                        <div className='profile-form__input-conteiner'>
                            <label className='profile-form__label' for='profile-form__input-email'>E-mail</label>
                            <input type="email" id="profile-form__input-email" className="profile-form__input" value="potcha@yandex.ru" name="email" required />
                        </div>
                    </fieldset>
                    <span className="profile-form__error profile-form__input-{tupe-error}"></span>
                    <buttom className='profile-form__button profile-form__button_type_chenge' type='submit'>Изменить</buttom>
                </form>
                <buttom className='profile-form__button profile-form__button_type_exit' type='button'>Выйти из акаунта</buttom>
            </section>
        </>
    );
}

export default Profile;
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
                <form class="profile__form" action="#" name="profile-form" novalidate>
                    <fieldset className='profile__fieldset'>
                        <div className='profile__input-conteiner'>
                            <label className='profile__label' for='profile__input-name'>Имя</label>
                            <input type="text" id="profile__input-name" className="profile__input" value="Василий" name="name" required minlength="2" maxlength="30" />
                        </div>
                        <div className='profile__input-conteiner'>
                            <label className='profile__label' for='profile__input-email'>E-mail</label>
                            <input type="email" id="profile__input-email" className="profile__input" value="potcha@yandex.ru" name="email" required />
                        </div>
                    </fieldset>
                    <span className="profile__error profile__input-{tupe-error}"></span>
                    <buttom className='profile__button profile__button_type_chenge' type='submit'>Изменить</buttom>
                    <buttom className='profile__button profile__button_type_exit' type='button'>Выйти из акаунта</buttom>
                </form>
            </section>
        </>
    );
}

export default Profile;
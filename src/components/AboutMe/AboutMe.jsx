import React from 'react';
import './AboutMe.css';
import MyPhoto from '../../images/myPhoto.jpg';

function AboutMe() {

    return (
        <section className='student' id='aboutMe'>
            <h2 className='student__title'>Студент</h2>
            <div className='student__conteiner'>
                <div className='student__text-conteiner'>
                    <h3 className='student__subtitle'>Андрей</h3>
                    <p className='student__profession'>Фронтенд-разработчик, 32 года</p>
                    <p className='student__text'>Я родился в Адыгее, живу в Москве. В 2013 году с отличием окончил экономический факультет АГУ по специальности "Управление персоналом". У меня есть супруга
                        и сын. Я люблю слушать книги, а ещё увлекаюсь плаваньем. С 2013 года работал в продуктовом ритейле на руководящих позициях. Недавно начал кодить. Понял, что эта работа мне очень нравится, обрел в ней себя. </p>
                    <a className='student__link' href='https://github.com/kudinov-andrej' target="blank" >Github</a>
                </div>
                <img className='student__photo' src={MyPhoto} alt='фотография студента'></img>
            </div>
        </section>
    );
}

export default AboutMe;
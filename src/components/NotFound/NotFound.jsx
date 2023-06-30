import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className='not-found'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__text'>Страница не найдена</p>
            <button className='not-found__button' onClick={goBack}>
                Назад
            </button>
        </div>
    );
};

export default NotFound;
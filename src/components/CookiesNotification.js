import React from 'react';
import { closeNotification } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const CookiesNotification = props => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.notificationReducer);
    return (
        <div data-aos="fade-in" data-aos-delay="30" className={`cookies--notification ${ notification === 'show' ? 'show' : 'hide' }`}>
            <header className="closeBtn">
                <i className="fas fa-times close" onClick={() => dispatch(closeNotification())}></i>
            </header>
            <p>This site uses cookies to provide a great user experience. By using <u><a href="/">ModernRealEstateListings.com</a></u>, you agree to our use of cookies.</p>
            <button className="cookies--notification-moreBtn accept" onClick={() => dispatch(closeNotification())}>Accept</button>
            <button className="cookies--notification-moreBtn" href="/about-cookies">Read More</button>
        </div>
    );
}

export default CookiesNotification;
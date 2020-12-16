import React, { Fragment, useEffect } from 'react'
import Header from './Header';
import ListingCard from './ListingCard';
import Hero from './Hero';
import CookiesNotification from '../components/CookiesNotification';
import Footer from './Footer';
import { showNotification } from '../actions';
import { useDispatch } from 'react-redux';

function Index() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!document.cookie.split(';').some((item) => 
        item.includes('notification_accept=true'))) {
            setTimeout(() => {
              dispatch(showNotification())
            }, 5000);
        }
    }, [dispatch])
    return (
        <Fragment>
            <Header></Header>
           <Hero />
          <ListingCard />
          <CookiesNotification />
          <Footer></Footer>
        </Fragment>
    )
}

export default Index

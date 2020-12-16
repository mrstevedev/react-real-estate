import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { splitStrToLower } from '../util/util';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../util/util';

function ListingCards() {
    const listings = useSelector((state) => state.listingsReducer.listings);
    return (
        <div className="home--listing-container">
           {listings === undefined ? (
                <Fragment>
                    <div className="home--listing-card loading"></div>
                    <div className="home--listing-card loading"></div>
                    <div className="home--listing-card loading"></div>
                </Fragment>
           ) : listings ? listings.map((listing, index) => (
               <Link to={{
                   pathname: `/listing/${ splitStrToLower(listing.property.description) }`,
                   state: {
                       listing: listing
                   }
               }} key={index}>
                <div className="home--listing-card fade-in" style={{
                    background: `url(${ listing.property.primaryImageUrl }) no-repeat center top / cover`,
                }}>
                    <div className="home--listing-card-top">
                    <div className="new--listing-tag-container">
                        <h3 className="new--listing-tag-txt">New Listing</h3>
                    </div>
                        <div className="new--listing-card-top-price">
                            <span>${formatCurrency(listing.price)}</span>
                        </div>
                    </div>
                   <div className="home--list-card-bottom">
                   <h4 className="home--listing-title">{ listing.property.description }</h4>
                    <div className="home--listing-card-agent">
                    <p>
                        <img alt="agent" className="home--listing-card-agent-photo" src={ listing.listingAgent.user.agentPhoto } /> 
                        { listing.listingAgent.user.firstName } { listing.listingAgent.user.lastName }
                    </p>
                    </div>
                   </div>
                </div>
               </Link>
           )) : ''}
        </div>
    )
}

export default ListingCards

import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../util/util";

function ListingHome(props) {
  const selectedListing = props.location.state.listing;

  const listingUrl = encodeURI(document.location.href);
  const listingTitle = encodeURI(selectedListing.property.description);
  const listingPhoto = encodeURI(selectedListing.property.primaryImageUrl);

  const { addressLine1, city, state, zip } = props.location.state.listing.property.address;

  return (
    <div className="selected--listing-container">
      <div
        className="selected-listing-left fade-in"
        style={{
          background: `url(${selectedListing.property.primaryImageUrl})`,
          height: "900px",
          width: "100%",
          display: "block",
          backgroundSize: "cover",
          position: "relative",
        }}
      ></div>
      <div className="selected--listing-right">
        <div className="selected--listing-right-top">
          <Link
            style={{
              color: "#333",
              textDecoration: "none",
              fontWeight: "bold",
              alignItems: "center",
              display: "flex",
            }}
            to={{
              pathname: "/",
            }}
          >
            <svg
              style={{ margin: "0 0.3rem" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
                fill="currentColor"
              />
            </svg>
            Back To Listings
          </Link>
          <div className="selected--listing-right-top-price">
            <h2>${formatCurrency(selectedListing.price)}</h2>
          </div>
        </div>
        <h4 className="home--listing-title-selected">
          {selectedListing.property.description}
        </h4>
        <div className="selected--listing-row">
          <h5 className="selected--listing-row-txt">Location</h5>
          <h5 className="selected--listing-row-txt selected--listing-row-txt-value">
            {addressLine1} {city}, {state} {zip}
          </h5>
        </div>
        <div className="selected--listing-row">
          <h5 className="selected--listing-row-txt">Number of Baths</h5>
          <h5 className="selected--listing-row-txt selected--listing-row-txt-value">
            {selectedListing.property.numberBaths} Baths
          </h5>
        </div>
        <div className="selected--listing-row">
          <h5 className="selected--listing-row-txt">Number of Bedrooms</h5>
          <h5 className="selected--listing-row-txt selected--listing-row-txt-value">
            {selectedListing.property.numberBedrooms} Bedrooms
          </h5>
        </div>
        <div className="selected--listing-row">
          <h5 className="selected--listing-row-txt">Square Ft.</h5>
          <h5 className="selected--listing-row-txt selected--listing-row-txt-value">
            {selectedListing.property.squareFeet} Sq. Ft.
          </h5>
        </div>
        <div className="selected--listing-row">
          <h5 className="selected--listing-row-txt">Contact Agent</h5>
          <h5 className="selected--listing-row-txt selected--listing-row-txt-value">
            <span className="selected--listing-row-txt-value-group">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                  fill="currentColor"
                />
                <path
                  d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                  fill="currentColor"
                />
              </svg>{" "}
              {selectedListing.listingAgent.user.firstName}{" "}
              {selectedListing.listingAgent.user.lastName}
            </span>
            <span className="selected--listing-row-txt-value-group">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                  fill="currentColor"
                />
              </svg>
              <a href="mailto:agent@gmail.com" className="link">
                agent@gmail.com
              </a>
            </span>
            <span className="selected--listing-row-txt-value-group">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 16H11V18H13V16Z" fill="currentColor" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM7 4H17V20H7L7 4Z"
                  fill="currentColor"
                />
              </svg>{" "}
              619.405.5755
            </span>
          </h5>
        </div>
      </div>
      <div className="selected--listing-share">
        <h3 className="selected--listing-share-txt">Share Listing</h3>
        <a href={`https://twitter.com/intent/tweet/?text=${listingTitle}&url=${listingUrl}`} target="_blank">
          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
              fill="#333"
            />
          </svg>
        </a>
        <a href="#!">
          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
              fill="#333"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ListingHome;

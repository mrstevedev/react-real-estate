import React from "react";
import { Link } from "react-router-dom";
import SignInPhotos from "../components/SignInPhotos";

function SignIn(props) {
  const randomImage =
    SignInPhotos[Math.floor(Math.random() * SignInPhotos.length)];

  const handleToggleVisibility = () => {
    var passwordField = document.getElementById("password--field");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  };
  return (
    <div className="selected--listing-container">
      <div
        className="selected-listing-left fade-in"
        style={{
          background: `url(${randomImage}) no-repeat left top / cover`,
          height: "900px",
          width: "100%",
          display: "block",
          position: "relative",
        }}
      ></div>
      <div className="selected--listing-right signin">
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
        <div className="signin--container">
          <div className="signin--register-signin">
            <h2>Sign In</h2>
          </div>
          <label className="">
            Username
            <input type="text" autoFocus />
          </label>
          <label className="">
            Password
            <input type="password" id="password--field" />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleToggleVisibility}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
                fill="currentColor"
              />
            </svg>
          </label>
          <button className="signIn--btn">Sign In</button>
          <p className="forgot-password">
            <Link to="#!" className="link">
              Forgot Password?
            </Link>
          </p>

          <div>
            Don't have an account? Register{" "}
            <Link to="#!" className="link">
              here
            </Link>
          </div>
        </div>
      </div>
      <div className="selected--listing-share signin">
        <h3 className="selected--listing-share-txt signin-txt">
          <svg
            width="24"
            height="24"
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
          </svg>
          Sign-In
        </h3>
      </div>
    </div>
  );
}

export default SignIn;

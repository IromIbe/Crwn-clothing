import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, isGoogleSignedIn, inverted, ...otherProps }) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignedIn ? "google" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;

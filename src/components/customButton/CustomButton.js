import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, isGoogleSignedIn, ...otherProps }) {
  return (
    <button
      className={`${isGoogleSignedIn ? "google" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;

import React from "react";
import "./Directory.scss";
import sections from "./Directory-data.js";
import MenuItem from "../MenuItem/MenuItem.js";

function Directory() {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

export default Directory;

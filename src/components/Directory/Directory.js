import React from "react";
import "./Directory.scss";
import sections from "./Directory-data.js";
import MenuItem from "../MenuItem/MenuItem.js";

function Directory() {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, imageUrl, title, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

export default Directory;

import React from "react";
import "./Directory.scss";
// import { directoryDataSlice } from "../../features/redux/directory/Directory-data.js";
import MenuItem from "../MenuItem/MenuItem.js";
import { useSelector } from "react-redux";
// import { selectDirectorySection } from "../../features/redux/directory/directory.selectors";

function Directory() {
  const sections = useSelector((state) => state.directory.sections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

export default Directory;

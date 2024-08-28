import React from "react";
// import image1 from "./images/1.jpg";
import "./First.css";

const First = () => {
  return (
    <>
      <div className="gallerytext">
        <h1>GallerySpot</h1>
      </div>
      <div className="main">
      {/* <img src={image1} alt="main-image" className="main-image" /> */}
      <div className="gallery-content">
        <h2 className="gallery">GALLERY</h2>
        <p className="big">Best Hair Styles</p>
        <p className="small">OUTSTANDINGLOOKS</p>
      </div>
    </div>
    </>
  );
};

export default First;

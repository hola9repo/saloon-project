import React from "react";
import "./Second.css";

import image2 from "./images/1.jpeg";
import image3 from "./images/2.jpeg";
import image4 from "./images/3.jpeg";
import image5 from "./images/4.jpeg";
import image6 from "./images/5.jpeg";
import image7 from "./images/6.jpeg";
import image8 from "./images/7.jpeg";
import image9 from "./images/8.jpeg";

import image10 from "./images/10.jpg";
import image11 from "./images/11.webp";
import image12 from "./images/12.png";
import image13 from "./images/13.webp";
import image14 from "./images/14.png";
import image15 from "./images/15.jpg";
import image16 from "./images/16.png";
import image17 from "./images/17.png";

import image18 from "./images/18.jpeg";
import image19 from "./images/19.jpeg";
import image20 from "./images/20.webp";
import image21 from "./images/21.png";
import image22 from "./images/22.jpeg";
import image23 from "./images/23.jpeg";
import image24 from "./images/24.png";
import image25 from "./images/25.jpeg";

const Second = () => {
  return (
    <>
      <div className="second">
        <p>GALLERY</p>
        <h1>EXPERIENCE THE STYLE</h1>
      </div>
      <div className="images">
        <div className="image-container">
          <img src={image2} alt="1" />
          {/* <div className="overlay"></div> */}
        </div>
        <div className="image-container">
          <img src={image3} alt="2" />
          {/* <div className="overlay"></div> */}
        </div>
        <div className="image-container">
          <img src={image4} alt="3" />
          {/* <div className="overlay"></div> */}
        </div>
        <div className="image-container">
          <img src={image5} alt="4" />
          {/* <div className="overlay"></div> */}
        </div>
        <div className="image-container">
          <img src={image6} alt="5" />
          {/* <div className="overlay"></div> */}
        </div>
        <div className="image-container">
          <img src={image7} alt="6" />
          {/* <div className="overlay"></div> */}
        </div>
        <div className="image-container">
          <img src={image8} alt="7" />
          {/* <div className="overlay"></div> */}
        </div>
        <div className="image-container">
          <img src={image9} alt="8" />
          {/* <div className="overlay"></div> */}
        </div>
      </div>
      <div className="second">
        <p>GALLERY</p>
        <h1>MENS STYLES</h1>
      </div>
      <div className="images">
        <div className="image-container">
          <img src={image10} alt="10" />
          <div className="overlays">FLATTOP</div>
        </div>
        <div className="image-container">
          <img src={image11} alt="11" />
          <div className="overlays">MEDIUM CUT</div>
        </div>
        <div className="image-container">
          <img src={image12} alt="12" />
          <div className="overlays">FAUX HAWK</div>
        </div>
        <div className="image-container">
          <img src={image13} alt="13" />
          <div className="overlays">QUIFF STYLE</div>
        </div>
        <div className="image-container">
          <img src={image14} alt="14" />
          <div className="overlays">POMPADOUR</div>
        </div>
        <div className="image-container">
          <img src={image15} alt="15" />
          <div className="overlays">COMB</div>
        </div>
        <div className="image-container">
          <img src={image16} alt="16" />
          <div className="overlays">FADE</div>
        </div>
        <div className="image-container">
          <img src={image17} alt="17" />
          <div className="overlays">FRINGE</div>
        </div>
      </div>
      <div className="second">
        <p>GALLERY</p>
        <h1>WOMEN STYLES</h1>
      </div>
      <div className="images">
        <div className="image-container">
          <img src={image18} alt="18" />
          <div className="overlays">CURLY BANGS</div>
        </div>
        <div className="image-container">
          <img src={image19} alt="19" />
          <div className="overlays">SHAG</div>
        </div>
        <div className="image-container">
          <img src={image20} alt="20" />
          <div className="overlays">BANGS</div>
        </div>
        <div className="image-container">
          <img src={image21} alt="21" />
          <div className="overlays">BLUNT CUT</div>
        </div>
        <div className="image-container">
          <img src={image22} alt="22" />
          <div className="overlays">Balayage layered waves</div>
        </div>
        <div className="image-container">
          <img src={image23} alt="23" />
          <div className="overlays">BOB</div>
        </div>
        <div className="image-container">
          <img src={image24} alt="24" />
          <div className="overlays">Feathered layers</div>
        </div>
        <div className="image-container">
          <img src={image25} alt="25" />
          <div className="overlays">AFRO</div>
        </div>
      </div>
    </>
  );
};

export default Second;

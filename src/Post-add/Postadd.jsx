import React from "react";
import "./Postadd.css";
import { data } from "./post";

const Postadd = () => {
  return (
    <>
      <div className="post-heading">
        <h1>Post your ads</h1>
      </div>
      <div className="post-container">
        <div className="post-wrapper">
          {data.map((item) => {
            return (
              <div key={item.id} className="adv-container">
                <img src={item.img} alt="img"/>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Postadd;

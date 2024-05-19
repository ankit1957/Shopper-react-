import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of products or services over the internet serves as a virtual
          marketplace where businesses and individual showcase their products,
          interact with customers, and conduct transactions without the need for
          a physical presence. e-commerce websites have gained immense
          popularity dur ti their convenient accessibility, and the global reach
          they offer.
        </p>
        <p>
          E-commerce webistes typically display products or services and
          detailed descriptions, images, prices, nad may available various
          options (e.g sizes, color). Eacg product usually has its own
          description with the relevant indormation.
        </p>
      </div>
    </div>
  );
};

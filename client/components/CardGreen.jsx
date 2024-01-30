import React from "react";
import Image from "next/image";
import "../css/card.css";
import krish from "./Krish";
import Krish from "./Krish";

const Card = (props) => {
  return (
    <div class="parent">
      <div class="card">
        <div class="logo">
          <span class="circle circle3"></span>
          <span class="circle circle4"></span>
          <span class="circle circle5">
            <Image
              src="/brain_black.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </span>
        </div>
        <div class="glass"></div>
        <div class="content">
          <span class="title">{props.feature}</span>
          <span class="text">{props.description}</span>
        </div>
        <div class="bottom">
          <div class="social-buttons-container flex items-center">
            <button class="social-button .social-button1">
              <Image
                src={props.techstackimage}
                width={20}
                height={20}
                alt="Picture of the author"
              />
            </button>

            <p>{props.techstack}</p>
            {/* <button class="social-button .social-button2">
              <Image
                src={props.techstackimage}
                width={20}
                height={20}
                alt="Picture of the author"
              />
            </button>
            <button class="social-button .social-button3">
              <Image
                src={props.techstackimage}
                width={20}
                height={20}
                alt="Picture of the author"
              />
            </button> */}
          </div>
          <div class="view-more">
            <button
              className="view-more-button"
              onClick={() => (window.location.href = props.link)}
            >
              Try Now
            </button>

      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

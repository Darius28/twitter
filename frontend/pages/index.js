import React from "react";
import { Twitter } from "react-bootstrap-icons";

export default function HomeIndex() {
  return (
    <div className="home-container">
      <div className="home-container__image__container">
        <div className="home-container__image">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          />
        </div>
        <div className="home-container__image__overlay">
          <Twitter size={160} color="white" />
        </div>
      </div>
      <div className="home-container__text__container">
        <div className="home-container__text__logo">
          <Twitter size={48} color="white" />
        </div>
        <h1 className="home-container__text__heading1">Happening now</h1>
        <h2 className="home-container__text__heading2">Join Twitter today.</h2>
        <div className="home-container__text__buttons">
          <button className="home-container__text__button-primary">
            Sign Up
          </button>
          <button className="home-container__text__button-secondary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
import "./HeaderStyles.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="body1">
      <div className="text-center">
        <div className="banner-container">
          <div className="Title">
            <h1>Te ayudamos a alcanzar Tu Éxito Financiero</h1>
            <Link to="/login" className="p">
              <button type="button" className="btn">
                Ingresa Aquí
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

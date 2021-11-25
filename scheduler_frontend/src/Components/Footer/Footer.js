import React from "react";

import "./Footer.css";
//import { footer } from "react-bootstrap";
const Footer = () => (
  <div style={{marginTop:"8rem"}}>
    <footer className=" footer page-footer m-0 p-3">
      <div className="footer-copyright text-center ">
        <div style={{ marginBottom: "0.5rem" }}>
          <h2
            style={{
              color: "black",
              display: "inline-block",
              backgroundColor: "white",
              fontWeight: "800",
              padding: "0.2rem",
              borderRadius: "0.5rem",
              borderColor: "black"
            }}
          >
            Class Scheduler
          </h2>
        </div>
        <span> © 2021 Copyright</span>
      </div>
    </footer>
  </div>
);

export default Footer;

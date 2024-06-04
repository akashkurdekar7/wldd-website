import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";

const navbar = () => {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Logo src={logo} alt="Logo" />
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Campaign
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Why Us?
                </a>
              </li>
            </ul>
            <Button className="btn btn-primary" href="#">
              Enquire Now
            </Button>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navbar {
    margin-bottom: 20px;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const Button = styled.a`
  margin-left: auto;
`;

export default navbar;

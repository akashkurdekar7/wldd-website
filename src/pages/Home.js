import React from "react";
import styled from "styled-components";
import logo from "../assets/image 5.png";
import heroImage from "../assets/visual-image.png";

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <Logo src={logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#campaigns">
                    Campaign
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#clients">
                    Clients
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#why">
                    Why Us?
                  </a>
                </li>
              </ul>
              <a className="btn btn-primary" href="#contact">
                Enquire Now
              </a>
            </div>
          </div>
        </nav>
      </Header>
      <Main>
        <Section id="home">
          <div className="container">
            <div className="middle">
              <div className="part1">
                <div className="hero">
                  <span className="greet">Welcome to</span>
                  <img src={logo} alt="WLDD.in" className="greet_img" />
                </div>
              </div>
              <div className="part2">
                <div className="img">
                  <img src={heroImage} alt="hero Image" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="slider">Slider Component</div>
          </div>
        </Section>
        <Section id="about">about us</Section>
        <Section id="campaigns">compaign</Section>
        <Section id="services">Our Services</Section>
        <Section id="clients">Client</Section>
        <Section id="Why">Why Us?</Section>
        <Section id="contact">Contact Us </Section>
      </Main>
      <Footer></Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;
const Header = styled.header`
  position: fixed;
  .nav_item a.active {
    background-color: #ddd;
    color: black;
  }
`;

const Main = styled.main`
  margin-top: 65px;
`;
const Section = styled.section`
  min-height: 100vh;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.color.background};

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .middle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .part1,
  .part2 {
    flex: 1;
  }
  .hero {
    text-align: center;
  }

  .greet {
    color: ${({ theme }) => theme.color.white};
    font-weight: 700;
    font-size: 3rem;
  }
  .img {
    text-align: center;
  }

  .slider {
    text-align: center;
    color: ${({ theme }) => theme.color.primary};
    font-weight: 700;
    font-size: 2rem;
  }
`;

const Footer = styled.footer``;

const Logo = styled.img`
  height: 40px;
`;

export default Home;

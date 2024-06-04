import React from "react";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default Layout;

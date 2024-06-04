import React from "react";
import Navbar from "./navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Header;

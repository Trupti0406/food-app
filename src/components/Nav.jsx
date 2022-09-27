import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Logo to={"/"}>
      <img
        src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
        alt=""
        style={{ width: "10rem", marginTop: "0.5rem" }}
      />
    </Logo>
  );
}

const Logo = styled(Link)`
height:80px;
width:100%;
padding: 0 2rem;
`

export default Nav
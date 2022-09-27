import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Logo to={"/"}>
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320"
        alt=""
        style={{ width: "7rem" }}
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
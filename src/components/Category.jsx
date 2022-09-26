import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

function Category() {
  return (
    <List>
      <CuisineLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </CuisineLink>
      <CuisineLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </CuisineLink>
      <CuisineLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai Food</h4>
      </CuisineLink>
      <CuisineLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </CuisineLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0rem;
`;

const CuisineLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  cursor: pointer h4 {
    font-size: 0.8rem;
  }
  svg {
    font-size: 2.5rem;
  }
  &.active {
    h4 {
      color: #fc8019;
    }
    svg {
      color: #fc8019;
    }
  }
`;

export default Category;

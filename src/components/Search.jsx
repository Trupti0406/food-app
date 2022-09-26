import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <FormStyle>
      <div>
        <FaSearch></FaSearch>
        <input type="text" placeholder="Search for food" />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
display:flex;
justify-content:center;
  div {
    position: relative;
  }
  input {
    border: 2px solid #282c3f;
    font-size: 1rem;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    outline: none;
    margin-left:0.5rem;
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translate(100%, -50%);
    color: #fc8019;
  }
  placeholder {
    margin-left: 1rem;
  }
`;
export default Search;

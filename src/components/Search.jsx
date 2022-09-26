import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'


function Search() {
  const [input, setInput] = useState("");
  const  navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("searched/"+input)
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search for food"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  div {
    position: relative;
  }
  input {
    border: 2px solid #282c3f;
    font-size: 1rem;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    outline: none;
    margin-left: 0.5rem;
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

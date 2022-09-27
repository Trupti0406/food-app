import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const [Popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    // Storing our search in local storage sp the api doesn't have to refresh and fetch on
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_MY_API}&number=12`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      // console.log(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular In Menu:</h3>
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              912: {
                perPage: 3,
              },
              700: {
                perPage: 2,
              },
              480: {
                perPage: 1,
                arrows: true,
              },
            },
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {Popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 18rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7); /* Black background with 0.5 opacity */
    padding: 0rem 0.3rem;
  }
`;
export default Popular;

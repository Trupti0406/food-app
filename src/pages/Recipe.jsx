import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_MY_API}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button>Instructions</Button>
        <Button>Ingredients</Button>
      </Info>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    backgound: #fc8019;
    color: white;   
  }

  h2 {
    margin-bottom: 2rem;
  }
//   li {
//     font-size: 1.2rem;
//     line-height: 2.5rem;
//   }
//   ul {
//     margin-top: 2rem;
//   }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #282c3f;
  background: #fc8019;
  border: 2px solid #282c3f;
  margin-right2rem;
  font-weight:600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;

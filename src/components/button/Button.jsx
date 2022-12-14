import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <StButton add>Add Recipe</StButton>
      <Link to={`/lists`}>
        <StButton back>Back</StButton>
      </Link>
    </div>
  );
};

const StButton = styled.button`
  width: 180px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  font-size: 20px;
  margin: 20px;
  margin-top: 30px;
  cursor: pointer;
  ${(props) =>
    props.add &&
    css`
      background-color: #35b2e8;
    `}
  ${(props) =>
    props.back &&
    css`
      background-color: #b9c6cb;
    `}
`;
export default Button;

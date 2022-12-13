import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import List from "../components/list/List";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  console.log(recipes);

  const fetchRecipes = async () => {
    const { data } = await axios.get("http://localhost:3000/recipes");
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <Wrapimg>
        <Title>
          <h1>Recipe Community</h1>
        </Title>
        <Nbutton>
          <Link to={`/board`}>
            <Newbutton>new Post</Newbutton>
          </Link>
        </Nbutton>
        <Card>
          {recipes.map((recipe) => (
            <List key={recipe.id} recipe={recipe}></List>
          ))}
        </Card>
      </Wrapimg>
    </div>
  );
};

const Title = styled.div`
  color: #056683;
  text-align: center;
`;
const Nbutton = styled.div`
  margin-bottom: -40px;
  text-align: right;
`;
const Newbutton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #3282bc;
  color: white;
  border: 0px;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(42, 52, 75, 0.658);
  font-weight: bold;
  &:hover {
    background: rgba(184, 217, 254, 0.366);
    transform: scale();
    cursor: pointer;
    color: #364d8f;
    font-weight: bold;
  }
`;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const Wrapimg = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-image:
   /* linear-gradient(
      rgba(252, 254, 255, 0.8),
      rgba(234, 240, 254, 0.8)
    ), */ url("https://cdn.discordapp.com/attachments/1047386886269829182/1051905388976550018/pngegg.png");
`;

export default RecipeList;

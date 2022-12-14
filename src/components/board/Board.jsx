import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { apis } from "../../lib/axios";
// import Form from "../form/Form";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { apis, __getRecipes } from "../../redux/modules/recipeSlice";
// import { addRecipe } from "../../redux/modules/recipeSlice";
// import { postCreators } from "../../redux/modules/recipeSlice";

const Board = () => {
  // const dispatch = useDispatch();
  // const list = useSelector((state) => state);
  // console.log("list: ", list);

  const [recipe, setRecipe] = useState({
    title: "",
    imgurl: "",
    recipe: "",
  });
  const [recipes, setRecipes] = useState([]);
  console.log("recipes: ", recipes);

  // const { data } = dispatch(__getRecipes());
  // console.log("BoardData: ", data);
  // const recipes = useSelector((state) => state);
  // console.log("recipes: ".recipes);

  // 데이터 처음 한번만 가져오기
  useEffect(() => {
    apis.getRecipes().then((res) => {
      const get = res.data;
      setRecipes(get);
    });
  }, []);

  // 댓글 추가 apis 버전
  const onSubmitHandler = (recipe) => {
    apis.createRecipes(recipe).then((res) => {
      window.location.href = "/lists";
      // console.log("test res: ", res);
      // console.log("test recipe: ", recipe);
      // dispatch(addRecipe([...recipe, res]));
      // setRecipes([...recipes, recipe]);
    });

    // 댓글추가 기본 버전
    // axios.post("http://localhost:3000/recipes", recipe);
    // setRecipes([...recipes, recipe]);
    // try {
    //   // 새로고침 되었을 때 경로 이동
    //   window.location.href = "/lists";
    // } catch (error) {
    //   console.log(error);
    // }
  };

  /*
  useEffect(() => {
    dispatch(__getRecipes());
  }, [dispatch]);
*/
  /*
  // 코드복사 12~15까지
  const fetchRecipes = async () => {
    const { data } = await axios.get("http://localhost:3000/recipes");
    setRecipes(data);
  };

  const onSubmitHandler = (recipe) => {
    axios.post("http://localhost:3000/recipes", recipe);
    setRecipes([...recipes, recipe]);
    try {
      // 새로고침 되었을 때 경로 이동
      window.location.href = "/lists";
    } catch (error) {
      console.log(error);
    }
  };

  // 코드복사 26~27까지
  useEffect(() => {
    fetchRecipes();
  }, []);
*/

  return (
    // <Form
    //   onSubmitHandler={onSubmitHandler}
    //   recipe={recipe}
    //   setRecipe={setRecipe}
    // ></Form>
    <StForm
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(recipe);
      }}
    >
      <StH1>당신의 레시피를 추천해주세요!</StH1>
      <StLabel htmlFor="title">Title</StLabel>
      <StInput
        type="text"
        name="title"
        id="title"
        onChange={(ev) => {
          const { value } = ev.target;
          setRecipe({
            ...recipe,
            id: Math.floor(Math.random() * 10000),
            title: value,
          });
        }}
      />
      <StLabel htmlFor="url">Image URL</StLabel>
      <StInput
        type="text"
        name="url"
        id="url"
        onChange={(ev) => {
          const { value } = ev.target;
          setRecipe({
            ...recipe,
            id: Math.floor(Math.random() * 10000),
            imgurl: value,
          });
        }}
      />
      <StLabel htmlFor="recipe">Recipe</StLabel>
      <StTextarea
        name="recipe"
        id="recipe"
        cols="40"
        rows="10"
        onChange={(ev) => {
          const { value } = ev.target;
          setRecipe({
            ...recipe,
            id: Math.floor(Math.random() * 10000),
            recipe: value,
          });
        }}
      ></StTextarea>
      <div>
        <StButton add>Add Recipe</StButton>
        <Link to={`/lists`}>
          <StButton back>Back</StButton>
        </Link>
      </div>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <p>{recipe.id}</p>
            <h1>{recipe.title}</h1>
            <h3>{recipe.recipe}</h3>
            <img src={recipe.imgurl} alt="이미지" />
          </div>
        ))}
      </div>
    </StForm>
  );
};

const StForm = styled.form`
  /* background-color: aqua; */
  max-width: 1000px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin-top: -100px;
`;

const StH1 = styled.h1`
  color: #02415c;
  font-size: 50px;
  margin-bottom: 70px;
  /* background-color: #b0c4cc;
  border-radius: 20px; */
`;
const StLabel = styled.label`
  color: #02415c;
  font-size: 20px;
  margin: 10px;
  font-weight: bold;
`;

const StInput = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 10px;
  border: 0;
  background-color: #d6edf8;
  font-size: 20px;
  padding: 10px;
`;

const StTextarea = styled.textarea`
  width: 500px;
  border-radius: 10px;
  border: 0;
  background-color: #d6edf8;
  font-size: 20px;
  padding: 10px;
`;

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

export default Board;

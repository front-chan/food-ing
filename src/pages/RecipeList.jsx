// src/pages/home.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRecipe, deleteRecipe, changeRecipe } from "../redux/modules/recipe";
import styled, { css } from "styled-components";
import Form from "../components/form/Form";
import List from "../components/list/List";

const RecipeList = () => {
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");
  const recipes = useSelector((state) => state.recipe.recipes);
  // const todoId = useSelector((state) => console.log(state));
  // const selectId = useSelector((todos) => console.log(todos.toDo));
  // const todoId = useSelector((todos.map((todo) => todo)) => console.log(selectId.id));
  // console.log(todos);
  // console.log(todoId);
  // console.log(selectId);
  const dispatch = useDispatch();

  // function onClickAddHandler() {
  //   dispatch(addToDo(title));
  //   // const newToDo = {
  //   //   id: toDos.length + 1,
  //   //   title,
  //   // };
  //   // setToDos([...toDos, newToDo]);
  // }

  const onSubmit = (e) => {
    const newRecipe = {
      // payload의 값
      id: Math.floor(Math.random() * 100000),
      title,
      recipe,
      done: true,
    };
    e.preventDefault();
    if (title === "" && recipe === "") {
      return;
    }
    setTitle("");
    setRecipe("");
    dispatch(addRecipe(newRecipe));
  };

  const onDeleteRecipe = (id) => dispatch(deleteRecipe(id));
  // const newToDo = todos.filter((todo) => (todo.id = id));

  // function onChangeHandler(event) {
  //   setTitle(event.target.value);
  // }
  // console.log(title);

  const onChangeRecipe = (list) => dispatch(changeRecipe(list));
  // console.log(id, done);
  // console.log(todos);
  // delete는 id인데 change는 todos 전체 배열을 가지고 오는이유?
  // parameter로 받아오는 값인데 전체 배열을 가지고 오는것인지?
  // >> List의 changeToDo의 parameter값이 props.todo이기 때문

  return (
    <StDiv app>
      <Form
        title={title}
        recipe={recipe}
        onSubmit={onSubmit}
        setTitle={setTitle}
        setRecipe={setRecipe}
      ></Form>

      <StMain>
        <section>
          <h1>Woring...🔥</h1>
          <StDiv section>
            {recipes.map((list) =>
              list.done ? (
                <List
                  key={list.id}
                  list={list}
                  onDeleteRecipe={onDeleteRecipe}
                  onChangeRecipe={onChangeRecipe}
                ></List>
              ) : null
            )}
          </StDiv>
        </section>
        <section>
          <h1>Done..!🎉</h1>
          <StDiv section>
            {recipes.map((list) =>
              !list.done ? (
                <List
                  key={list.id}
                  list={list}
                  onDeleteRecipe={onDeleteRecipe}
                  onChangeRecipe={onChangeRecipe}
                ></List>
              ) : null
            )}
          </StDiv>
        </section>
      </StMain>
    </StDiv>
  );
};

const StDiv = styled.div`
  ${(props) =>
    props.app &&
    css`
      max-width: 1200px;
      width: 95%;
      margin: 20px auto;
    `};
  ${(props) =>
    props.section &&
    css`
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 12px;
      flex-wrap: wrap;
    `};
`;

const StMain = styled.main`
  margin-left: 30px;
`;

export default RecipeList;

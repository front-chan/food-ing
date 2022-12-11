// src/redux/modules/counter.js

// Action Value
const ADD_RECIPE = "ADD_RECIPE";
const DELETE_RECIPE = "DELETE_RECIPE";
const CHANGE_RECIPE = "CHANGE_RECIPE";
// Action Creator
export const addRecipe = (payload) => {
  return {
    type: ADD_RECIPE,
    payload, // 여기에 지정하지 않는 이유 setValue와 비슷한 역할인지
  };
};

export const deleteRecipe = (payload) => {
  return {
    type: DELETE_RECIPE,
    payload,
  };
};

export const changeRecipe = (payload) => {
  return {
    type: CHANGE_RECIPE,
    payload,
  };
};

// Initial State
const initialState = {
  // 여기는 어떤 값도 들어갈 수 있는지
  recipes: [
    {
      id: Math.floor(Math.random() * 100000),
      title: "react를 배워봅시다",
      recipe: "react를 배워봅시다",
      done: true,
    },
    {
      id: Math.floor(Math.random() * 100000),
      title: "react를 배워보까?",
      recipe: "react를 배워보까?",
      done: false,
    },
  ],
};

// Reducer
const recipe = (state = initialState, action) => {
  // console.log(action.payload);
  //   console.log(action);
  //   console.log(state);
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
        // toDos: [...initialState.toDos, { title: action.payload }], // 에러
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((list) => list.id !== action.payload),
        //   console.log(action); // payload값으로 id값이 들어와야 하는데 안들어옴
        //   console.log(todo);

        // payload.id
        // newToDos: action.payload.id,
        // console.log(newToDos)
      };
    case CHANGE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((list) => {
          // console.log(action.payload);
          return list.id === action.payload.id
            ? { ...list, done: !action.payload.done }
            : { ...list };
        }),
      };
    default:
      return state;
  }
};

// export default reducer
export default recipe;

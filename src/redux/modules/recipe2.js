// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  recipes: [],
  //   isLoading: false,
  //   error: null,
};

/*
export const __getRecipes = createAsyncThunk(
  "getRecipes",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/recipes");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
*/

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.recipes = [...state.recipes, action.payload];
    },
    deleteRecipe: (state, action) => {
      state.recipes = state.recipes.filter(
        (list) => list.id !== action.payload
      );
    },
    changeRecipe: (state, action) => {
      state.recipes = state.recipes.map((list) => {
        // console.log(action.payload);
        return list.id === action.payload.id
          ? { ...list, done: !action.payload.done }
          : { ...list };
      });
    },
  },
  //   extraReducers: {
  //     [__getRecipes.pending]: (state) => {
  //       state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
  //     },
  //     [__getRecipes.fulfilled]: (state, action) => {
  //       state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
  //       state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
  //     },
  //     [__getRecipes.rejected]: (state, action) => {
  //       state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
  //       state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
  //     },
  //   },
});

export const { addRecipe, deleteRecipe, changeRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
/*
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
*/

// src/redux/modules/counter.js

// import { createSlice } from "@reduxjs/toolkit";

// import { createAction } from "redux-actions";
import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { apis } from "../../lib/axios";

// const LOAD_RECIPE = "LOAD_RECIPE";
// const loadRecipe = createAction(LOAD_RECIPE, (list) => ({ list }));

const initialState = {
  recipes: [],
  // isLoading: false,
  // error: null,
};

/*
const getRecipeMiddleware = () => {
  return (dispatch) => {
    apis
      .getRecipes()
      .then((res) => {
        const recipeList = res;
        dispatch(loadRecipe(recipeList));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const postCreators = {
  getRecipeMiddleware,
};
*/

/*
export const __getRecipes = createAsyncThunk(
  "getRecipes",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3000/recipes");
      console.log("data: ", data.data);
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
  // extraReducers: {
  //   [__getRecipes.pending]: (state) => {
  //     state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
  //   },
  //   [__getRecipes.fulfilled]: (state, action) => {
  //     state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
  //     state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
  //   },
  //   [__getRecipes.rejected]: (state, action) => {
  //     state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
  //     state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
  //   },
  // },
});

export const { addRecipe, deleteRecipe, changeRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
// export { postCreators };

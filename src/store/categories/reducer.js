import { categorieResponseGet, categorieResponsePost } from "./action";

// get api reducer
const CategoriesReducerGet = (state = [], action) => {
  switch (action.type) {
    case categorieResponseGet:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
};

// post api reducer
const CategoriesReducerPost = (state = [], action) => {
  switch (action.type) {
    case categorieResponsePost:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
};

export { CategoriesReducerGet, CategoriesReducerPost };

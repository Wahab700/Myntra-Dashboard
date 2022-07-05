import { CATEGORIE_GET_API, CATEGORIE_POST_API } from "./actionType";

export const categorieResponseGet = (actionType, data) => ({
  type: CATEGORIE_GET_API,
  payload: { actionType, data },
});

export const categorieResponsePost = (actionType, data) => ({
  type: CATEGORIE_POST_API,
  payload: { actionType, data },
});

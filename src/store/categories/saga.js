import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { categorieResponseGet, categorieResponsePost } from "./action";

// post api
async function categorieGetApi() {
  const res = await fetch("http://localhost:3000/api/categories/all");
  const data = await res.json();
  return data;
}
function* categorieGetSaga() {
  const response = yield call(categorieGetApi);
  yield put({ type: categorieResponseGet, payload: { data: response } });
}

// get api
const categoriePostApi = async (finalFormData) => {
  const res = await fetch("http://localhost:3000/api/categories/add", {
    method: "POST",
    body: finalFormData,
  });
  console.log("post saga ==>", finalFormData);
  const data = await res.json();
  return data;
};

export function* addCategoryAsync({ payload: data }) {
  console.log("I got form data --> ", data);
  const response = yield call(categoriePostApi, data);
  yield put({ type: "CATEGORIE_POST_API", payload: { data: response } });
}

function* watchAddCategory() {
  yield takeEvery(`CATEGORIE_POST_API`, addCategoryAsync);
}

export { categorieGetSaga, watchAddCategory };

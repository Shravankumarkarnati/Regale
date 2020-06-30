import resultsTypes from "./results.types";

export const setResults = (results) => {
  return {
    type: resultsTypes.SET_RESULTS,
    payload: results,
  };
};

export const changePage = (pageNum) => {
  return {
    type: resultsTypes.CHANGE_PAGE_NUM,
    payload: pageNum,
  };
};

export const selectRecipe = (recipe_id) => {
  return {
    type: resultsTypes.SELECTED_RECIPE,
    payload: recipe_id,
  };
};

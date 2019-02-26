import { DISPLAY_SUGGESTIONS_LIST } from "../constants/SearchConstants";
import axios from "axios";

export const displaySuggestionsList = suggestionsList => {
  return {
    type: DISPLAY_SUGGESTIONS_LIST,
    payload: {
      suggestionsList
    }
  };
};

export const getSuggestionsData = searchString => {
  if (searchString.length < 3) {
    return dispatch => {
      dispatch(displaySuggestionsList([]));
    };
  }
  var query = {
    $or: [
      {
        name: {
          $like: "%" + searchString + "%"
        }
      }
    ]
  };
  return dispatch => {
    return axios
      .post("http://localhost:4567/api/product/search/", query)
      .then(response => {
        dispatch(displaySuggestionsList(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

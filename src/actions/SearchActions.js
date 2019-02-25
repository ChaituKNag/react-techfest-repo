import { DISPLAY_SUGGESTIONS_LIST } from "../constants/SearchConstants";
import axios from 'axios';

export const displaySuggestionsList = suggestionsList => {
  return {
    type: DISPLAY_SUGGESTIONS_LIST,
    payload: {
      suggestionsList
    }
  };
};

export const getSuggestionsData = (searchString) => {
    return (dispatch) => {
        return axios.get('http://localhost:4567/api/product')
          .then(response => {
            var suggestionsList = response.data.filter(product => {
                return product.name.toLowerCase().indexOf(searchString) > -1;
            });
            dispatch(displaySuggestionsList(suggestionsList))
          })
          .catch(error => {
            throw(error);
          });
      };
};

import {
    DISPLAY_SUGGESTIONS_LIST
  } from "../constants/SearchConstants";
  
  const initalState = {
    suggestionsList: []
  };
  
  const suggestionsList = (previousState = initalState, action) => {
    switch (action.type) {
      case DISPLAY_SUGGESTIONS_LIST:
        return {
          ...previousState,
          suggestionsList: action.payload.suggestionsList
        };
      default:
        return previousState;
    }
  };
  
  export default suggestionsList;
  
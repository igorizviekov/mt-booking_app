import {
  GeocodingActionTypes,
  IGeocodingAction,
  IGeocodingState,
} from '../types/geocodingReducer.typed';

const initialState = {
  searchHistory: [],
};

export const geocodingReducer = (
  state: IGeocodingState = initialState,
  action: IGeocodingAction,
) => {
  switch (action.type) {
    case GeocodingActionTypes.ADD_TO_STORY:
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };
    case GeocodingActionTypes.REMOVE_FROM_STORY:
      return {
        ...state,
        searchHistory: state.searchHistory.filter(
          (e) => e.place_id !== action.payload,
        ),
      };
    case GeocodingActionTypes.CLEAR_STORY:
      return {
        ...state,
        searchHistory: [],
      };
    default:
      return state;
  }
};

import {
  GeocodingActionTypes,
  IGeocodingAction,
  IGeocodingItem,
  IGeocodingState,
} from '../types/geocodingReducer.types.d';

const initialState = {
  searchHistory: [],
};

export const geocodingReducer = (
  state: IGeocodingState = initialState,
  action: IGeocodingAction,
) => {
  switch (action.type) {
    case GeocodingActionTypes.ADD_TO_STORY:
      const newHistory =
        state.searchHistory
          .map((e) => e.display_name)
          .indexOf(action.payload.display_name) >= 0
          ? state.searchHistory
          : [...state.searchHistory, action.payload];

      return {
        ...state,
        searchHistory: newHistory,
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

export const addToStory = (newItem: IGeocodingItem) => {
  return { type: GeocodingActionTypes.ADD_TO_STORY, payload: newItem };
};

export const fetchStory = () => {
  return { type: GeocodingActionTypes.FETCH_STORY };
};

export const removeFromStory = (id: number) => {
  return { type: GeocodingActionTypes.REMOVE_FROM_STORY, payload: id };
};

export const clearStory = () => {
  return { type: GeocodingActionTypes.CLEAR_STORY };
};

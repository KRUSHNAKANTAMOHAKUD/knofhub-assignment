import {
  FETCH_EVENT_DATA_REQUESTED,
  FETCH_EVENT_DATA_SUCCEEDED,
  FETCH_EVENT_DATA_FAILED,
} from "./action";

const intialState = {
  eventData: [],
  isPending: false,
  error: null,
};

export const eventDataReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_EVENT_DATA_REQUESTED:
      return {
        ...state,
        isPending: true,
      };
    case FETCH_EVENT_DATA_SUCCEEDED:
      return {
        ...state,
        eventData: action.payload,
        isPending: false,
      };
    case FETCH_EVENT_DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

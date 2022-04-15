import {
  FETCH_EVENT_DATA_REQUESTED,
  FETCH_EVENT_DATA_SUCCEEDED,
  FETCH_EVENT_DATA_FAILED,
  LOAD_MORE_EVENTS,
} from "./action";

const intialState = {
  eventData: [],
  isPending: false,
  error: null,
  limit: 12,
  offset: 0,
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
    case LOAD_MORE_EVENTS:
      return {
        ...state,
        offset: state.offset + 1,
      };
    default:
      return state;
  }
};

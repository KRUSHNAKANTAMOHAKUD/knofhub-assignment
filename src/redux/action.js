export const FETCH_EVENT_DATA_REQUESTED = "FETCH_EVENT_DATA_REQUESTED";
export const FETCH_EVENT_DATA_SUCCEEDED = "FETCH_EVENT_DATA_SUCCEEDED";
export const FETCH_EVENT_DATA_FAILED = "FETCH_EVENT_DATA_FAILED";
export const LOAD_MORE_EVENTS = "LOAD_MORE_EVENTS"

export const eventDataRequested = () => ({
  type: FETCH_EVENT_DATA_REQUESTED,
});
export const eventDataSucceeded = (payload) => ({
  type: FETCH_EVENT_DATA_SUCCEEDED,
  payload,
});
export const eventDataFailed = (payload) => ({
  type: FETCH_EVENT_DATA_FAILED,
  payload,
});
export const loadMoreEvent = () => ({
  type: LOAD_MORE_EVENTS,
});

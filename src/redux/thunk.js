import axios from "axios";
import {
  eventDataRequested,
  eventDataSucceeded,
  eventDataFailed,
} from "./action";

export const getEventData =
  (limit, offset, searchQuery, pastEvents) => async (dispatch) => {
    dispatch(eventDataRequested());
    try {
      const { data } = await axios.get(
        `https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=${limit}&offset=${offset}&search_query=${searchQuery}&past_events=${pastEvents}`
      );
      dispatch(eventDataSucceeded(data));
    } catch (error) {
      dispatch(eventDataFailed(error));
    }
  };

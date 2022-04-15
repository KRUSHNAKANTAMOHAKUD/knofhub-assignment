import axios from "axios";
import {
  eventDataRequested,
  eventDataSucceeded,
  eventDataFailed,
} from "./action";

export const getEventData = (payload) => async (dispatch) => {
  dispatch(eventDataRequested());
  try {
    const { data } = await axios.get(
      "https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=8"
    );
    dispatch(eventDataSucceeded(data));
  } catch (error) {
    dispatch(eventDataFailed(error));
  }
};

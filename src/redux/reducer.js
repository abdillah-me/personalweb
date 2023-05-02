import dataJson from "../../db.json";
import { UPDATE_PORTFOLIO } from "./actions";

const initialState = {
   ...dataJson,
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_PORTFOLIO:
         return {
            ...state,
            portofolio: action.payload,
         };

      default:
         return state;
   }
};

export default reducer;

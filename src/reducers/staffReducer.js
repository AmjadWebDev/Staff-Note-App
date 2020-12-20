import { GET_EPMS, ADD_EPM, DELETE_EPM, EPMS_ERROR, SET_LOADING } from "../actions/types";

const initialState = {
  stafs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EPMS:
      return {
        ...state,
        stafs: action.payload,
        loading: false,
      };
    case ADD_EPM:
      return {
        ...state,
        stafs: [...state.stafs, action.payload],
        loading: false,
      };
    case DELETE_EPM:
      return {
        ...state,
        stafs: state.stafs.filter((staf) => staf.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EPMS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

import { GET_NOTES, SET_LOADING, NOTES_ERROR } from "./types";

// export const getNotes = () => {
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch("/notes");
//     const data = await res.json();

//     dispatch({
//       type: GET_NOTES,
//       payload: data,
//     });
//   };
// };
export const getNotes = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/notes");
    const data = await res.json();

    dispatch({
      type: GET_NOTES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.data,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

import { GET_EPMS, ADD_EPM, DELETE_EPM, EPMS_ERROR, SET_LOADING } from "./types";

// Get staff from server
export const getStaff = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/staff");
    const data = await res.json();

    dispatch({
      type: GET_EPMS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EPMS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Add a new staff
export const addStaff = (staf) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/staff", {
      method: "POST",
      body: JSON.stringify(staf),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_EPM,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EPMS_ERROR,
      payload: err.response.statusText,
    });
  }
};
// Get staff from server
export const deleteStaff = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/staff/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_EPM,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: EPMS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

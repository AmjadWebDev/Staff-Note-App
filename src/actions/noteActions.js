import { GET_NOTES, SET_LOADING, NOTES_ERROR, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, SET_CURRENT, CLEAR_CURRENT, SEARCH_NOTES } from "./types";

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

// GET note from server
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
      payload: err.response.statusText,
    });
  }
};

// ADD a new note
export const addNote = (note) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_NOTE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.statusText,
    });
  }
};

// DELETE note from server
export const deleteNote = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/notes/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.statusText,
    });
  }
};

// UPDATE note from server
export const updateNote = (note) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_NOTE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.statusText,
    });
  }
};

// SEARCH  server notes
export const searchNotes = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/notes?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_NOTES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Set current note
export const setCurrent = (note) => {
  return {
    type: SET_CURRENT,
    payload: note,
  };
};

//Clear current note
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

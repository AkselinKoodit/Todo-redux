import { getAll, createNew, removeNote, toggleNote } from '../services/notes';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const INIT_NOTE = 'INIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await getAll();
    dispatch({
      type: INIT_NOTE,
      data: notes,
    });
  };
};

export const createNote = (text) => {
  return async (dispatch) => {
    const newNote = await createNew(text);
    dispatch({
      type: ADD_TODO,
      data: newNote,
    });
  };
};
export const removeOneNote = (id) => {
  return async (dispatch) => {
    await removeNote(id);
    const notes = await getAll();
    dispatch({
      type: DELETE_NOTE,
      data: notes,
    });
  };
};

export const toggleDone = (id, note) => {
  return async (dispatch) => {
    await toggleNote(id, note);
    dispatch({
      type: TOGGLE_COMPLETE,
      id: id,
    });
  };
};

import * as actionTypes from '../actions';
import noteServices from '../../services/notes';
// import { useEffect } from 'react';
// import axios from 'axios';

const reducer = (state = [], action) => {
  switch (action.type) {
    // case actionTypes.REMOVE_TODO:
    //   console.log(action.id);
    //   // const noteToDelete = state.find((n) => n.id === action.payload);
    //   return { ...state };
    case actionTypes.DELETE_NOTE:
      // const noteToDelete = state.find((n) => n.id === action.payload);
      // return { ...state };
      return action.data;

    case actionTypes.INIT_NOTE:
      return action.data;
    case actionTypes.ADD_TODO:
      return [...state, action.data];
    // state.concat({
    //   id: action.id,
    //   text: action.text,
    //   completed: action.completed,
    // });
    case actionTypes.TOGGLE_COMPLETE:
      const noteToChange = state.find((n) => n.id === action.id);
      const changeDone = {
        ...noteToChange,
        completed: !noteToChange.completed,
      };
      return state.map((note) => (note.id !== action.id ? note : changeDone));

    default:
      return state;
  }
};

// export const deleteNote = (id) => {
//   return async (dispatch) => {
//     const deleted = await noteServices.removeNote(id);
//     dispatch({
//       // type: actionTypes.REMOVE_TODO,
//       type: actionTypes.DELETE_NOTE,
//       id: id,
//     });
//   };
// };

export default reducer;

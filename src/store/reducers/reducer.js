import * as actionTypes from '../actions';
import noteServices from '../../services/notes';
// import { useEffect } from 'react';
// import axios from 'axios';

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.DELETE_NOTE:
      return action.data;
    case actionTypes.INIT_NOTE:
      return action.data;
    case actionTypes.ADD_TODO:
      return [...state, action.data];
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

export default reducer;

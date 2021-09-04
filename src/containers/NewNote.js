import React from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../store/actions';

const NewNote = () => {
  const dispatch = useDispatch();

  const addTodo = async (e) => {
    e.preventDefault();
    const text = e.target.noteInput.value;
    dispatch(createNote(text));
    e.target.noteInput.value = '';
  };

  return (
    <form onSubmit={addTodo}>
      <input type="text" placeholder="Enter a note..." name="noteInput"></input>
      <input type="submit" className="btn" value="Add note" />
    </form>
  );
};

export default NewNote;

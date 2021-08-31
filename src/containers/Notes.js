import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../store/actions';
import { MdDeleteForever } from 'react-icons/md';
import { deleteNote } from '../store/reducers/reducer';
// import { removeTodo } from '../services/notes';

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();
  //   const messages = useSelector((state) => state.messages);
  const handleDelete = (id) => dispatch(deleteNote(id));
  // type: actionTypes.REMOVE_TODO,
  // id: id,

  const toggleDone = (id) => ({
    type: actionTypes.TOGGLE_COMPLETE,
    id: id,
  });

  return (
    <div>
      <ul>
        these are the notes:{' '}
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleDone(note.id))}
            className={note.completed ? 'done todo' : 'todo'}
          >
            {note.text}
            <span>
              <MdDeleteForever
                // onClick={() => dispatch(handleDelete(note.id))}
                onClick={() => dispatch(handleDelete(note.id))}
              />
            </span>
          </li>
        ))}
      </ul>
      {/* <ul>
        these are the messages:{" "}
        {messages.map((message) => (
          <li key={message.id}>{message.text} </li>
        ))}
      </ul> */}
    </div>
  );
};
export default Notes;

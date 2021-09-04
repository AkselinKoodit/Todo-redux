import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { removeOneNote, toggleDone } from '../store/actions';
// import { deleteNote } from '../store/reducers/reducer';
// import { removeTodo } from '../services/notes';
// import { deleteNote } from '../services/notes';

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  // const handleDelete = (id) => {
  //   if (window.confirm('Are you sure you want to delete this note?')) {
  //     dispatch(deleteNote(id));
  //   }
  // };
  const handleDelete = (e, id) => {
    e.preventDefault();
    // event.stopPropagation();
    dispatch(removeOneNote(id));
  };
  // type: actionTypes.REMOVE_TODO,
  // id: id,

  // const toggleDone = (id) => dispatch(deleteNote(id));

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() =>
              dispatch(
                toggleDone(note.id, {
                  text: note.text,
                  completed: !note.completed,
                  id: note.id,
                })
              )
            }
            className={note.completed ? 'done todo' : 'todo'}
          >
            {note.text}
            {/* <span> */}
            <MdDeleteForever
              className="trashCan"
              // onClick={() => handleDelete(note.id)}
              onClick={(event) => handleDelete(event, note.id)}
            />
            {/* </span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Notes;

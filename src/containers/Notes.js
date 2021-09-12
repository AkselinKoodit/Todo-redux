import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { removeOneNote, toggleDone } from '../store/actions';

const Notes = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(removeOneNote(id));
  };

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
            {/* <span> */}{' '}
            <MdDeleteForever
              className="trashCan"
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

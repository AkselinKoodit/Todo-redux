import './App.css';
import NewNote from './containers/NewNote';
import Notes from './containers/Notes';
import Footer from './components/footer';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initializeNotes } from './store/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Todo app with Redux and hooks</h1>
      <NewNote />
      <Notes />
      <Footer />
    </div>
  );
};

export default App;

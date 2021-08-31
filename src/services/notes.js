import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes/';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (text) => {
  console.log('entered createNew function...');
  const object = { text, completed: false };
  const response = await axios.post(baseUrl, object);
  return response.data;
};
const removeTodo = async (id) => {
  console.log('Note deleted!');
  // const response = await axios.delete(baseUrl + id);
  return await axios.delete(baseUrl + id);
};

export default { getAll, createNew, removeTodo };

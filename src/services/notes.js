import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
export const createNew = async (text) => {
  const object = { text, completed: false };
  const response = await axios.post(baseUrl, object);
  return response.data;
};
// const noteDeleted = () => ({
//   type: actionTypes.DELETE_NOTE,
// });

export const removeNote = async (id) => {
  // return await function (dispatch) {
  //   axios
  //     .delete(baseUrl + '/' + id)
  //     .then((response) => {
  //       console.log('response: ', response);
  //       dispatch(noteDeleted());
  //       dispatch(getAll());
  //     })
  //     .catch((error) => console.log(error));
  // };
  // console.log('Deleting ' + id);
  // await axios.delete(baseUrl + '/' + id);
  // return await getAll();
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

export default { getAll, createNew, removeNote };

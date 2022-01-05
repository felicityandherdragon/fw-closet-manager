import axios from 'axios';
const ADD_NEW_ITEM = 'ADD_NEW_ITEM';

export const addNewItem = (item, sessionId) => {
  return async (dispatch) => {
    try {
      const user = (await axios.get(`/api/users/${sessionId}`)).data;
      const itemToUse = { ...item, userId: user.id };
      const newItem = (await axios.post('/api/clothingitems', itemToUse)).data;
      dispatch(_addNewItem(newItem));
    } catch (err) {
      console.log(err);
    }
  };
};

const _addNewItem = (newItem) => {
  return {
    type: ADD_NEW_ITEM,
    newItem,
  };
};

const newItemReducer = (state = {}, action) => {
  if (action.type === ADD_NEW_ITEM) {
    return (state = action.newItem);
  }
  return state;
};

export default newItemReducer;

import axios from 'axios';
const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export const getAllItems = (sessionId) => {
  return async (dispatch) => {
    try {
      const allItems = (await axios.get(`/api/clothingitems/${sessionId}`)).data;
      dispatch(_getallItems(allItems));
    } catch (err) {
      console.log(err);
      dispatch(_getallItems([]));
    }
  };
};

const _getallItems = (allItems) => {
  return {
    type: GET_ALL_ITEMS,
    allItems,
  };
};

const allItemsReducer = (state = [], action) => {
  if (action.type === GET_ALL_ITEMS) {
    return (state = action.allItems);
  }
  return state;
};

export default allItemsReducer;

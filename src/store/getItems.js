import axios from 'axios';
const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export const getAllItems = () => {
  return async (dispatch) => {
    try {
      const allItems = (await axios.get('/api/clothingitems')).data;
      dispatch(_getallItems(allItems));
    } catch (err) {
      console.log(err);
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

import axios from 'axios';
const GET_ITEMS_BY_COLOR = 'GET_ITEMS_BY_COLOR';

export const getItemsbyColor = (colorId, sessionId) => {
  return async (dispatch) => {
    try {
      const itemsbyColor = (await axios.get(`/api/colors/item/${sessionId}/${colorId}`)).data;
      dispatch(_getItemsbyColor(itemsbyColor));
    } catch (err) {
      console.log(err);
      dispatch(_getItemsbyColor([]));
    }
  };
};

const _getItemsbyColor = (itemsbyColor) => {
  return {
    type: GET_ITEMS_BY_COLOR,
    itemsbyColor,
  };
};

const itemsbyColorReducer = (state = [], action) => {
  if (action.type === GET_ITEMS_BY_COLOR) {
    return (state = action.itemsbyColor);
  }
  return state;
};

export default itemsbyColorReducer;

import axios from 'axios';
import { simplifyforChart } from '../../utils/helpers';
const GET_ALL_COLORS = 'GET_ALL_COLORS';

export const getAllColorsbyUser = (sessionId) => {
  return async (dispatch) => {
    try {
      const allColors = (await axios.get(`/api/colors/user/${sessionId}`)).data;
      const colorsForChart = simplifyforChart(allColors);
      dispatch(_getAllColorsbyUser(colorsForChart));
    } catch (err) {
      console.log(err);
      dispatch(_getAllColorsbyUser([]));
    }
  };
};

const _getAllColorsbyUser = (allColors) => {
  return {
    type: GET_ALL_COLORS,
    allColors,
  };
};

const allColorsReducer = (state = [], action) => {
  if (action.type === GET_ALL_COLORS) {
    return (state = action.allColors);
  }
  return state;
};

export default allColorsReducer;

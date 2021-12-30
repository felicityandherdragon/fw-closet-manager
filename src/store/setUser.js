import axios from 'axios';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (email) => {
  return async (dispatch) => {
    try {
      const user = (await axios.get('/api/users/byemail', {
        params: {
          email: email,
        },
      })).data;
      dispatch(_setCurrentUser(user));
    } catch (err) {
      console.log(err);
    }
  };
};

const _setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

const currentUserReducer = (state = {}, action) => {
  if (action.type === SET_CURRENT_USER) {
    return (state = action.user);
  }
  return state;
};

export default currentUserReducer;

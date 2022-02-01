import axios from 'axios';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const getUserBySession = (sessionId) => {
  return async (dispatch) => {
    try {
      const user = (
        await axios.get(`/api/users/${sessionId}`)
      ).data;
      dispatch(_setCurrentUser(user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const setCurrentUser = (email, profilePic) => {
  return async (dispatch) => {
    try {
      const user = (
        await axios.get('/api/users/byemail', {
          params: {
            email: email,
            profilePic: profilePic,
          },
        })
      ).data;
      window.localStorage.setItem('sessionId', user.currentSession);
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

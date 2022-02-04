import axios from 'axios';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

export const getUserBySession = (sessionId) => {
  return async (dispatch) => {
    try {
      const user = (await axios.get(`/api/users/${sessionId}`)).data;
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

export const removeCurrentUser = () => {
  return (dispatch) => {
    window.localStorage.removeItem('sessionId');
    dispatch(_removeCurrentUser({}));
  };
};

const _setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

const _removeCurrentUser = (user) => {
  return {
    type: REMOVE_CURRENT_USER,
    user,
  };
};

const currentUserReducer = (state = {}, action) => {
  if (action.type === SET_CURRENT_USER) {
    return (state = action.user);
  } else if (action.type === REMOVE_CURRENT_USER) {
    return state === action.user;
  }
  return state;
};

export default currentUserReducer;

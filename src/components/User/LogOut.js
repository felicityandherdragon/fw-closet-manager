import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserBySession, removeCurrentUser } from '../../store/setUser';

const LogOut = (props) => {
  useEffect(() => {
    props.getUserBySession(window.localStorage.getItem('sessionId'));
  }, []);

  return (
    <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8 flex items-center mb-2">
        <img src={props.currentUser.profilePic} alt="user profile pic"></img>
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
          onClick={() => props.removeCurrentUser()}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserBySession: (sessionId) => {
      dispatch(getUserBySession(sessionId));
    },
    removeCurrentUser: () => {
      dispatch(removeCurrentUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);

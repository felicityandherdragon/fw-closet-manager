import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import MyResponsivePie from './ClosetManagerPie';
import { getAllItems } from '../../store/getItems';
import { getAllColorsbyUser } from '../../store/getColors';
import { getItemsbyColor } from '../../store/getItemsbyColor';

const ClosetManager = (props) => {
  useEffect(() => {
    props.getAllColorsbyUser(window.localStorage.getItem('sessionId'));
  }, [props.allItems, props.newItem]);

  return (
    <div className="grid grid-cols-4 grid-rows-6 h-screen overflow-scroll">
      <div className="col-start-1 col-end-4">
        <h2 className="row-span-1 p-3 text-2xl font-bold leading-7 sm:text-3xl sm:truncate border-b border-grey-light m-4 rounded-sm">
          Your wardrobe at a glance
        </h2>
        {props.allColors?.length > 0 ? (
          <>
            <MyResponsivePie
              data={props.allColors}
              colorTheme={{ scheme: 'pink_yellowGreen' }}
            />
          </>
        ) : (
          <p>No items!</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allItems: state.allItems,
    currentUser: state.currentUser,
    allColors: state.allColors,
    newItem: state.newItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: (sessionId) => {
      dispatch(getAllItems(sessionId));
    },
    getAllColorsbyUser: (sessionId) => {
      dispatch(getAllColorsbyUser(sessionId));
    },
    getItemsbyColor: (colorId) => {
      dispatch(getItemsbyColor(colorId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClosetManager);

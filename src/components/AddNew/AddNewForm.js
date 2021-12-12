import React, { useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { addNewItem } from '../../store/addItems';

const AddNewForm = (props) => {
  const [item, setItem] = useState({
    itemName: '',
    brand: '',
    color: '',
    category: '',
    purchasedOn: '',
    imageSrc: '',
    season: '',
  });

  const submitInfo = () => {
    console.log(item);
  };

  return (
    <>
      <form method="POST" className="mt-5">
        <h3
          className="text-lg leading-6 font-medium mb-3 text-black"
          id="modal-title"
        >
          Add info
        </h3>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              Name your purchase
            </label>
            <input
              type="text"
              name="item-name"
              id="item-name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              defaultValue={props.title ? props.title : undefined}
              onChange={(e) => setItem({...item, itemName: e.target.value})}
            />
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              Which brand?
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              defaultValue={props.brand ? props.brand : undefined}
              onChange={(e) => setItem({...item, brand: e.target.value})}
            />
            <label
              htmlFor="purchasedOn"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              When did you purchase this?
            </label>
            <input
              type="date"
              name="purchasedOn"
              id="purchasedOn"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              onChange={(e) => setItem({...item, purchasedOn: e.target.value})}
            />
            <label
              htmlFor="season"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              Which season would you wear it for?
            </label>
            <select
              id="season"
              name="season"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setItem({...item, season: e.target.value})}
            >
              <option>Spring</option>
              <option>Summer</option>
              <option>Autumn</option>
              <option>Winter</option>
            </select>
          </div>
        </div>
      </form>
      <div className="bg-grey-light px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue text-base font-medium text-white hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => submitInfo()}
        >
          Submit item info
        </button>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: (item) => {
      dispatch(addNewItem(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddNewForm);

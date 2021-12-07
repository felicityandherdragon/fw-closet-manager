import React, { useState, useRef, useCallback } from 'react';

const AddNewForm = (props) => {
  return (
    <form method="POST" className="mt-5">
      <h3 className="text-lg leading-6 font-medium mb-3 text-black" id="modal-title">
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
          >
            <option>Spring</option>
            <option>Summer</option>
            <option>Autumn</option>
            <option>Winter</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default AddNewForm;

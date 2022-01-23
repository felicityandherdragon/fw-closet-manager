import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DetailSlider from './DetailSlider';
import { getAllItems } from '../../store/getItems';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'Season',
    name: 'Season',
    options: [
      { value: 'Spring', label: 'Spring', checked: false },
      { value: 'Summer', label: 'Summer', checked: false },
      { value: 'Autumn', label: 'Autumn', checked: true },
      { value: 'Winter', label: 'Winter', checked: false },
    ],
  },
];

const CurrentCloset = (props) => {
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openSlider = (item) => {
    setOpen(true);
    setCurrentItem(item);
  };

  useEffect(() => {
    props.getAllItems(window.localStorage.getItem('sessionId'));
  }, [props.currentUser, props.newItem]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 grid grid-cols-4">
        <h2 className="sr-only">All items</h2>
        <div className="col-start-1 col-end-4 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {props.allItems.length > 0 ? (
            props.allItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="group"
                onClick={() => openSlider(item)}
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-grey-light rounded-lg shadow-md overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-black">{item.brand}</h3>
                <p className="mt-1 text-lg font-medium text-black">
                  {item.itemName}
                </p>
              </a>
            ))
          ) : (
            <p>No items!</p>
          )}
        </div>
        <form className="mt-4 border-t border-grey-light col-start-4 ml-3">
          <h3 className="sr-only">Categories</h3>
          {filters.map((section) => (
            <Disclosure
              as="div"
              key={section.id}
              className="border-t border-grey px-4 py-6"
            >
              {({ open }) => (
                <>
                  <h3 className="-mx-2 -my-3 flow-root">
                    <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-grey hover:text-grey">
                      <span className="font-medium text-black">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-6">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`filter-mobile-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            defaultChecked={option.checked}
                            className="h-4 w-4 border-grey rounded text-purple-dark focus:ring-purple"
                          />
                          <label
                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                            className="ml-3 min-w-0 flex-1 text-grey-dark"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </form>
      </div>
      {open && (
        <DetailSlider open={open} setOpen={setOpen} currentItem={currentItem} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allItems: state.allItems,
    currentUser: state.currentUser,
    newItem: state.newItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: (userId) => {
      dispatch(getAllItems(userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCloset);

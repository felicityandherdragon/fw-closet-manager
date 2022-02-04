import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DetailSlider from './DetailSlider';
import { getAllItems } from '../../store/getItems';
import { getAllColorsbyUser } from '../../store/getColors';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';

const CurrentCloset = (props) => {
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [seasonFilter, setSeasonFilter] = useState('');

  const setFilter = (selected, checked) => {
    if (checked === true) {
      setSeasonFilter(selected);
    } else {
      setSeasonFilter('');
    }
  };

  const openSlider = (item) => {
    setOpen(true);
    setCurrentItem(item);
  };

  useEffect(() => {
    props.getAllItems(window.localStorage.getItem('sessionId'));
    props.getAllColorsbyUser(window.localStorage.getItem('sessionId'));
  }, [props.currentUser, props.newItem, seasonFilter]);

  const filters = [
    {
      id: 'Season',
      name: 'Season',
      options: [
        { value: 'Spring', label: 'Spring' },
        { value: 'Summer', label: 'Summer' },
        { value: 'Autumn', label: 'Autumn' },
        { value: 'Winter', label: 'Winter' },
      ],
    },
  ];

  return (
    <div className="bg-beige">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 grid grid-cols-4">
        <h2 className="sr-only">All items</h2>
        <div className="col-start-1 col-end-4 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {props.allItems.length > 0 ? (
            props.allItems
              .filter((each) => {
                if (seasonFilter !== '') {
                  return each.season === seasonFilter;
                } else {
                  return each;
                }
              })
              .map((item) => (
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
                    <Disclosure.Button className="px-2 py-3 bg-beige w-full flex items-center justify-between text-grey hover:text-grey">
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
                    <div className="space-y-6 overflow-x-scroll h-80">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.label} className="flex items-center">
                          <input
                            id={`filter-mobile-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.label}
                            type="checkbox"
                            defaultChecked={false}
                            // defaultChecked={option.checked}
                            className="h-4 w-4 border-grey rounded text-purple-dark focus:ring-purple"
                            onChange={(e) =>
                              setFilter(e.target.value, e.target.checked)
                            }
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
    allColors: state.allColors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: (userId) => {
      dispatch(getAllItems(userId));
    },
    getAllColorsbyUser: (sessionId) => {
      dispatch(getAllColorsbyUser(sessionId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCloset);

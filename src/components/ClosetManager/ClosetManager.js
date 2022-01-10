import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import MyResponsivePie from './ClosetManagerPie';
import { getAllItems } from '../../store/getItems';
import useAllColors from '../../../hooks/useAllColors';

const data = [
  {
    id: 'java',
    label: 'java',
    value: 95,
    color: 'hsl(247, 70%, 50%)',
  },
  {
    id: 'make',
    label: 'make',
    value: 124,
    color: 'hsl(242, 70%, 50%)',
  },
  {
    id: 'ruby',
    label: 'ruby',
    value: 135,
    color: 'hsl(36, 70%, 50%)',
  },
  {
    id: 'scala',
    label: 'scala',
    value: 347,
    color: 'hsl(75, 70%, 50%)',
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 574,
    color: 'hsl(106, 70%, 50%)',
  },
];

const ClosetManager = (props) => {
  const [currentView, setCurrentView] = useState('byColor');
  const [allColors] = useAllColors(props);

  return (
    <div className="grid grid-cols-4 grid-rows-6 h-screen">
      <div className="col-start-1 col-end-4">
        <h2 className="row-span-1 p-3 text-2xl font-bold leading-7 sm:text-3xl sm:truncate border-b border-grey-light m-4 rounded-sm">
          Your wardrobe at a glance
        </h2>
        {allColors?.length > 0 ? (
          <>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-grey-light shadow-sm px-4 py-2 bg-white text-sm font-medium text-grey-dark hover:bg-grey-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-light focus:ring-blue-dark m-3">
                  Options
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={
                            (active
                              ? 'bg-grey-light text-grey-dark'
                              : 'text-grey-dark',
                            'block px-4 py-2 text-sm')
                          }
                          onClick={() => setCurrentView('byColor')}
                        >
                          See by color
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={
                            (active
                              ? 'bg-grey-light text-grey-dark'
                              : 'text-grey-dark',
                            'block px-4 py-2 text-sm')
                          }
                          onClick={() => setCurrentView('bySeason')}
                        >
                          See by season
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            {currentView === 'byColor' && (
              <MyResponsivePie
                data={data}
                colorTheme={{ scheme: 'pink_yellowGreen' }}
              />
            )}
            {currentView === 'bySeason' && (
              <MyResponsivePie
                data={data}
                colorTheme={{ scheme: 'red_yellow_green' }}
              />
            )}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: (sessionId) => {
      dispatch(getAllItems(sessionId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClosetManager);

import React from 'react';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';

const BannerNotification = (props) => {
  return (
    <div className={props.loggedIn ? 'bg-black' : 'bg-pink'}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className={props.loggedIn ? 'flex p-2 rounded-lg bg-blue' : 'flex p-2 rounded-lg bg-pink-dark'}>
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">{props.msg}</span>
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className={props.loggedIn ? '-mr-1 flex p-2 rounded-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2' : '-mr-1 flex p-2 rounded-md hover:bg-pink-dark focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2' }
              onClick={() => props.setShowBanner(false)}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerNotification;

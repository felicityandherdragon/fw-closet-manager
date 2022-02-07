import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

const DetailSlider = ({ open, setOpen, currentItem }) => {
  const dateFormat = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const event = new Date(date);
    return event.toLocaleDateString(undefined, options);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-grey-dark bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-grey hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-black">
                      Item detail
                    </Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-grey-light rounded-lg shadow-md overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={currentItem.imageSrc}
                        alt={currentItem.itemName}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-grey-dark">
                      {currentItem.brand}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-black">
                      {currentItem.itemName}
                    </p>
                    <p className="mt-1 text-lg font-medium text-black">
                      {currentItem.season}
                    </p>
                    <p className="mt-1 text-lg font-medium text-black">
                      Colors
                    </p>
                    <div className="flex overflow-x-scroll">
                      {currentItem.color.map((color, idx) => (
                        <p
                          className="mt-1 text-sm font-medium text-black rounded-lg mx-1.5 p-2 border border-black"
                          key={idx}
                          style={{ backgroundColor: color.colorValue }}
                        >
                          {color.colorName}
                        </p>
                      ))}
                    </div>
                    <p className="mt-1 text-lg font-medium text-black">
                      Category
                    </p>
                    <div className="flex overflow-x-scroll">
                      {currentItem.category.map((cat, idx) => (
                        <p
                          className="mt-1 text-sm font-medium rounded-lg bg-blue-light mx-1.5 p-2 text-blue-dark"
                          key={idx}
                        >
                          {cat}
                        </p>
                      ))}
                    </div>
                    <p className="mt-1 text-lg font-medium text-black">
                      Purchased on
                    </p>
                    <p className="mt-1 text-sm font-medium text-pink-dark rounded-lg bg-pink-light mx-1.5 p-2">
                      {dateFormat(currentItem.purchasedOn)}
                    </p>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DetailSlider;

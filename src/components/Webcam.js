import React, { useState, useRef, useCallback } from 'react';
import { TiCameraOutline } from 'react-icons/ti';
import Webcam from 'react-webcam';

const WebcamComponent = ({ showCamera, setShowCamera }) => {
  const [imgSrc, setImgSrc] = useState(null);

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot();
    setImgSrc(imgSrc);
  }, [webcamRef, setImgSrc]);

  const retake = useCallback(() => {
    setImgSrc(null);
  }, [setImgSrc]);

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center place-items-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-grey-dark bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-white flex place-items-center place-content-center"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <TiCameraOutline />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-black"
                  id="modal-title"
                >
                  Take a picture of your purchase
                </h3>
                <p className="text-sm text-grey-dark">
                  Bring your purchase close to the camera!
                </p>
                <div className="mt-2">
                  {!imgSrc ? (
                    <div className="w-full">
                      <Webcam
                        audio={false}
                        width={1280}
                        height={720}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                      />
                    </div>
                  ) : (
                    <div className="w-full">
                      {imgSrc && (
                        <>
                          <img src={imgSrc} alt="newly taken" />
                          <form method="POST" className="mt-5">
                            <div className="shadow overflow-hidden sm:rounded-md">
                              <div className="px-4 py-5 bg-white sm:p-6">
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
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {!imgSrc ? (
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green sm:ml-3 sm:w-auto sm:text-sm"
                onClick={capture}
              >
                Snap a pic
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Submit item info
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={retake}
                >
                  Retake
                </button>
              </>
            )}
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-grey-light shadow-sm px-4 py-2 bg-white text-base font-medium text-grey-dark hover:bg-grey-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-dark sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setShowCamera(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebcamComponent;

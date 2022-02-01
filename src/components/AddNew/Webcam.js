import React, { useState, useRef, useCallback } from 'react';
import { TiCameraOutline } from 'react-icons/ti';
import axios from 'axios';
import Webcam from 'react-webcam';
import AddNewForm from './AddNewForm';

const WebcamComponent = ({ showCamera, setShowCamera }) => {
  const [imgSrc, setImgSrc] = useState(null);

  const webcamRef = useRef(null);

  const uploadToS3 = async (file) => {
    const url = (await axios.get('/s3url')).data;
    const buf = Buffer.from(file.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    try {
      const res = await axios.put(url, buf, {
        headers: {
          'Content-Encoding': 'base64',
          'Content-Type': 'image/jpeg',
        },
      });
      const uploadedImgUrl = url.split('?')[0];
      setImgSrc(uploadedImgUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const capture = useCallback(() => {
    const localImg = webcamRef.current.getScreenshot();
    uploadToS3(localImg);
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
                          <AddNewForm imageSrc={imgSrc} setModal={setShowCamera} />
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

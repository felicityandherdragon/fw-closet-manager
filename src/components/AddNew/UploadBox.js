import React, { useEffect, useState, useRef } from 'react';
import { TiUpload } from 'react-icons/ti';
import axios from 'axios';
import AddNewForm from './AddNewForm';

const UploadBox = ({ addNewItem, setShowUpload }) => {
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [getError, setGetError] = useState(false);

  const addNewFile = async () => {
    // console.log(inputRef.current.files[0]);
    setFile(inputRef.current.files[0]);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let file = [...e.dataTransfer.files][0];
    setFile(file);
    console.log('drop sth!');
  };

  const uploadToS3 = async () => {
    const url = (await axios.get('/s3url')).data;
    try {
      const res = await axios.put(url, file, {
        headers: {
          'Content-Type': 'image/jpeg',
        },
      });
      const uploadedImgUrl = url.split('?')[0];
      setImageUrl(uploadedImgUrl);
    } catch (err) {
      console.log(err);
      setGetError(true);
    }
  };

  console.log(file);

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
          {imageUrl ? (
            <>
              <img src={imageUrl} alt="uploaded" />
              <AddNewForm imageSrc={imageUrl} setModal={setShowUpload} />
            </>
          ) : (
            <>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <TiUpload />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-black"
                      id="modal-title"
                    >
                      Upload a picture of your purchase
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-grey-dark">
                        Upload a picture of your purchase
                      </p>
                      {getError && (
                        <p className="text-sm text-red-dark">
                          Oops something went wrong! Please retry uploading...
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-blue border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-grey"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div
                            className="flex text-sm text-grey-dark"
                            onDragEnter={(e) => handleDragEnter(e)}
                            onDragOver={(e) => handleDragOver(e)}
                            // onDragEnd={e => handleDragEnd(e)}
                            onDrop={(e) => handleDrop(e)}
                          >
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-dark hover:text-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                ref={inputRef}
                                onChange={addNewFile}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-grey-dark">
                            PNG, JPG, GIF up to 5 MB
                          </p>
                        </div>
                      </div>
                      {file && (
                        <p className="text-xs text-grey-dark mt-3">
                          File uploaded: {file.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-grey-light px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue text-base font-medium text-white hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => uploadToS3()}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-grey shadow-sm px-4 py-2 bg-white text-base font-medium text-grey-dark hover:bg-grey-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowUpload(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadBox;

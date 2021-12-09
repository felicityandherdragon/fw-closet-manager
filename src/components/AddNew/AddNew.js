import React, { useState } from 'react';
import { TiCameraOutline, TiUploadOutline } from 'react-icons/ti';
import WebcamComponent from './Webcam';
import UploadBox from './UploadBox';
import BarcodeReader from './BarcodeReader';

const AddNew = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showBarcode, setShowBarcode] = useState(false);

  const launchCamera = () => {
    setShowCamera(true);
  };

  const launchUpload = () => {
    setShowUpload(true);
  };

  const launchBarcodeReader = () => {
    setShowBarcode(true);
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="col-span-1 grid grid-cols-4 grid-rows-6 border-r-2 border-grey-light">
        <div className="col-start-2 col-end-4 row-start-3 row-end-5 rounded-lg text-xl border-2 border-transparent bg-grey-light shadow-md flex flex-col justify-center place-items-center hover:shadow-2xl bg-gradient-to-r hover:from-green-light to-transparent hover:border-green">
          <TiCameraOutline />
          <button onClick={() => launchCamera()}>Take a picture</button>
          {showCamera && (
            <WebcamComponent
              showCamera={showCamera}
              setShowCamera={setShowCamera}
            />
          )}
          <p className="text-grey-dark mt-2 mb-2 text-sm">OR</p>
          <button onClick={() => launchBarcodeReader()}>Read barcode</button>
          {showBarcode && (
            <BarcodeReader />
          )}
        </div>
      </div>
      <div className="col-span-1 grid grid-cols-4 grid-rows-6">
        <div className="col-start-2 col-end-4 row-start-3 row-end-5 rounded-lg text-xl border-2 border-transparent bg-grey-light shadow-md flex flex-col justify-center place-items-center hover:shadow-2xl bg-gradient-to-r hover:from-blue-light to-transparent hover:border-blue">
          <TiUploadOutline />
          <button onClick={() => launchUpload()}>upload a picture</button>
          {showUpload && (
            <UploadBox showUpload={showUpload} setShowUpload={setShowUpload} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNew;

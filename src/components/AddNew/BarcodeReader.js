import React, { useState, useRef, useCallback } from 'react';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';
import axios from 'axios';
import BarcodeItemInfo from './BarcodeItemInfo';

const BarcodeReader = () => {
  const [data, setData] = useState(null);
  const [item, setItem] = useState(null);

  const lookupProduct = async (productCode) => {
    const res = (
      await axios.get('/barcode', {
        params: {
          productCode: productCode,
        },
      })
    ).data;
    setItem(res.items[0]);
  };

  const scan = (err, result) => {
    if (data) {
      return;
    } else {
      console.log('no data set yet');
      if (result) {
        setData(result.text);
        lookupProduct(result.text);
        return;
      } else {
        setData(null);
      }
    }
  };

  return (
    <>
      {!data && (
        <BarcodeScannerComponent width={500} height={500} onUpdate={scan} />
      )}
      {data && <p>Barcode: {data}</p>}
      {item && <BarcodeItemInfo item={item} setItem={setItem} />}
    </>
  );
};

export default BarcodeReader;

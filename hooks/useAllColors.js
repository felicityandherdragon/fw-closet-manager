import { useState, useEffect } from 'react';

const useAllColors = (props) => {
  const [allColors, setAllColors] = useState([]);

  useEffect(() => {
    console.log('useEffect count');
    props.getAllItems(window.localStorage.getItem('sessionId'));
    // const colors = calcColors(props.allItems);
    setAllColors(['white']);
  }, []);

  console.log(props.allItems);

  return [allColors];
};

export default useAllColors;

import { useState, useEffect } from 'react';

const useAllColors = (props) => {
  const [allColors, setAllColors] = useState([]);

  useEffect(() => {
    props.getAllItems(window.localStorage.getItem('sessionId'));
    setAllColors(['white', 'black', 'grey']);
  }, []);

  console.log(props.allItems);

  return allColors;
};

export default useAllColors;

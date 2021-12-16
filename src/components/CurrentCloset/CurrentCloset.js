import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DetailSlider from './DetailSlider';
import { getAllItems } from '../../store/getItems';

const CurrentCloset = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.getAllItems();
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">All items</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {props.allItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group"
              onClick={() => setOpen(true)}
            >
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg shadow-md overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{item.brand}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {item.itemName}
              </p>
            </a>
          ))}
        </div>
      </div>
      {open && <DetailSlider open={open} setOpen={setOpen} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allItems: state.allItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: () => {
      dispatch(getAllItems());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCloset);

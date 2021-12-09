import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllItems } from '../../store/getItems';

const CurrentCloset = (props) => {

  useEffect(() => {
    props.getAllItems();
  }, []);

  console.log(props);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {props.allItems.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg shadow-md overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.brand}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.itemName}
              </p>
            </a>
          ))}
        </div>
      </div>
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

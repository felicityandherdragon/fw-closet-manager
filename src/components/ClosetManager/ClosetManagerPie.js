import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ResponsivePie } from '@nivo/pie';
import { animated } from '@react-spring/web';
import ItemsGallery from './ItemsGallery';
import { getItemsbyColor } from '../../store/getItemsbyColor';

const MyResponsivePie = ({
  data,
  colorTheme,
  getItemsbyColor,
  itemsbyColor,
}) => {
  const [openGallery, setOpenGallery] = useState(false);
  // const [items, setItems] = useState([]);

  const checkMore = (e) => {
    getItemsbyColor(e.data.colorId, window.localStorage.getItem('sessionId'));
    // setItems(itemsbyColor);
    setOpenGallery(true);
  };

  console.log(itemsbyColor);

  return (
    <>
      <div className="w-256 h-256">
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 200, bottom: 80, left: 120 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          // colors={colorTheme}
          colors={{ datum: 'data.color' }}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          onClick={(e) => checkMore(e)}
          arcLabelsComponent={({ datum, label, style }) => (
            <animated.g
              transform={style.transform}
              style={{ pointerEvents: 'none' }}
            >
              <circle fill={style.textColor} cy={6} r={15} />
              <circle
                fill="#ffffff"
                stroke={datum.color}
                strokeWidth={2}
                r={16}
              />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fill={style.textColor}
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                }}
              >
                {label}
              </text>
            </animated.g>
          )}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'Black',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'khaki',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'white',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'SlateGray',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'burgundy',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'silver',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'RosyBrown',
              },
              id: 'lines',
            },
            {
              match: {
                id: 'javascript',
              },
              id: 'lines',
            },
          ]}
          legends={[
            {
              anchor: 'top-right',
              direction: 'column',
              justify: false,
              translateX: 150,
              translateY: 0,
              itemWidth: 100,
              itemHeight: 20,
              itemsSpacing: 5,
              symbolSize: 20,
              itemDirection: 'left-to-right',
            },
          ]}
        />
      </div>
      {openGallery && (
        <ItemsGallery
          open={openGallery}
          setOpen={setOpenGallery}
          items={itemsbyColor}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsbyColor: state.itemsbyColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemsbyColor: (colorId, sessionId) => {
      dispatch(getItemsbyColor(colorId, sessionId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyResponsivePie);

import React from 'react';
import MyResponsivePie from './ClosetManagerPie';

const data = [
  {
    'id': 'java',
    'label': 'java',
    'value': 95,
    'color': 'hsl(247, 70%, 50%)'
  },
  {
    'id': 'make',
    'label': 'make',
    'value': 124,
    'color': 'hsl(242, 70%, 50%)'
  },
  {
    'id': 'ruby',
    'label': 'ruby',
    'value': 135,
    'color': 'hsl(36, 70%, 50%)'
  },
  {
    'id': 'scala',
    'label': 'scala',
    'value': 347,
    'color': 'hsl(75, 70%, 50%)'
  },
  {
    'id': 'javascript',
    'label': 'javascript',
    'value': 574,
    'color': 'hsl(106, 70%, 50%)'
  }
];

const ClosetManager = () => {
  return (
    <div>
      <p>This is where closet manager shows</p>
      <MyResponsivePie data={data} />
      <p>This is where closet manager ends</p>
    </div>
  );
};

export default ClosetManager;

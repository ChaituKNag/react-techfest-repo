import React from 'react';
import ReactDOM from 'react-dom';
import ProductTile from './ProductTile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductTile />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(true).toBe(true);
});


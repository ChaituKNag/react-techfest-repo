import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

  expect(true).toBe(true);
});

// custom test.
it('should be truthy', () => {
  expect(true).toBe(true);
})

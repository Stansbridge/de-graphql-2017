import React from 'react';
import ReactDOM from 'react-dom';

export default (id) => {
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById(id)
  );
}

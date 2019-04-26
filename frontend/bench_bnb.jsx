import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './utils/session_api_utils';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // TESTS
  window.signup = APIUtil.signup;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
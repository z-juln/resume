import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/reset.css';

ReactDOM.render(<App />, document.querySelector('#app')!);

// @ts-ignore
if (process.env.NODE_ENV === 'development' && module?.hot) module.hot.accept();

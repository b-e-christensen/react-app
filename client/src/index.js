import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import ScrollContainer from "react-indiana-drag-scroll";
import dragscroll from 'dragscroll'

const numbers = new Array(506).fill(1).map((_, index) => index + 1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ScrollContainer className="container dragscroll" horizontal={true} vertical={true}>
      <App />
    </ScrollContainer>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


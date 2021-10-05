import React from 'react';
import './loadactorbtn.css';

const LoadMoreBtn = (props) => {
  return (
    <div className="rmdb-loadmorebtn" onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  )
}

export default LoadMoreBtn;
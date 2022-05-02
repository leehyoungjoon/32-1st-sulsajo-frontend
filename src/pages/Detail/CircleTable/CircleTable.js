import React from 'react';
import './CircleTable.scss';

const CircleTable = ({ taste }) => {
  return taste.map((el, index) => {
    return (
      <div className="circleTable" key={index}>
        <div className="intensity">{el}</div>
        <div className="text" />
        <svg viexbox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="orange"
            strokeWidth="15"
            strokeDasharray={`${(2 * Math.PI * 30 * el) / 5} ${
              2 * Math.PI * 30 * (1 - el / 5)
            }`}
            strokeDashoffset={2 * Math.PI * 30 * 0.25}
          />
        </svg>
      </div>
    );
  });
};

export default CircleTable;

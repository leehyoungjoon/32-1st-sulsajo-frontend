import React from 'react';
import './CircleTable.scss';

const CircleTable = ({ intensity }) => {
  return (
    <div className="circleTable">
      <div className="intensity">{intensity}</div>
      <div className="text" />
      <svg viexbox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="orange"
          strokeWidth="15"
          strokeDasharray={`${(2 * Math.PI * 30 * intensity) / 5} ${
            2 * Math.PI * 30 * (1 - intensity / 5)
          }`}
          strokeDashoffset={2 * Math.PI * 30 * 0.25}
        />
      </svg>
    </div>
  );
};

export default CircleTable;

import React from 'react';
import './CircleTable.scss';

const CircleTable = () => {
  return (
    <div className="circleTable">
      <div className="intensity">없음</div>
      <div className="text">고소한 향</div>
      <svg viexbox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="orange"
          strokeWidth="15"
          strokeDasharray={`${2 * Math.PI * 40 * 0.75} ${
            2 * Math.PI * 40 * 0.25
          }`}
          strokeDashoffset={2 * Math.PI * 40 * 0.25}
        />
      </svg>
    </div>
  );
};

export default CircleTable;

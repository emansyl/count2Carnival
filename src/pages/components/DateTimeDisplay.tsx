import React from 'react';


interface DateTime {
    value: any,
    type: any,
    isDanger: any
}

const DateTimeDisplay = ({ value, type, isDanger } : DateTime) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;

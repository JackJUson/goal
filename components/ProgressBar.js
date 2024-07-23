import React from 'react';

const ProgressBar = ({ current, goal }) => {
  const progress = (current / goal) * 100;

  return (
    <div className='w-full bg-gray-200 rounded-full h-8 overflow-hidden'>
      <div
        className='bg-green-500 h-full flex items-center justify-center text-white font-bold transition-all duration-300'
        style={{ width: `${progress}%` }}
      >
        {current} / {goal}
      </div>
    </div>
  );
};

export default ProgressBar;

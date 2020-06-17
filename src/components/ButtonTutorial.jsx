import React from 'react';

const ButtonTutorial = ({ video }) => {
  return (
    <div className='absolute button-tutorial inset-x-0 flex justify-center'>
      <a className='text-white' href={video} target='_blank' rel='noopener noreferrer'>
        <div className='text-center lg:no-underline mt-4 bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-700 rounded'>
          Tutorial
        </div>
      </a>
    </div>
  );
};

export default ButtonTutorial;

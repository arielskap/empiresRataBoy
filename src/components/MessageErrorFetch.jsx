import React from 'react';

const MessageErrorFetch = ({ errorResponse, children }) => {

  return (
    <div className='w-full max-w-lg p-4'>
      <h1 className='text-center font-bold text-lg'>
        Error al
        {` ${children}`}
      </h1>
      <p className='mt-2'>
        <span className='font-bold'>Información del error:</span>
        {` ${errorResponse}`}
      </p>
    </div>
  );
};

export default MessageErrorFetch;

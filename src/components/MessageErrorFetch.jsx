import React from 'react';


const MessageErrorFetch = ({ errorResponse, handleCloseModal, children }) => {

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
      <div className='text-right mt-2'>
        <button className='bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded' type='button' onClick={handleCloseModal}>Aceptar</button>
      </div>
    </div>
  );
};

export default MessageErrorFetch;

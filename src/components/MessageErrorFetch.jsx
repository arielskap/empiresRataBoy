const MessageErrorFetch = ({ errorResponse, children }) => {

  return (
    <div className='w-full max-w-lg p-4'>
      <h1 className='text-lg font-bold text-center'>
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

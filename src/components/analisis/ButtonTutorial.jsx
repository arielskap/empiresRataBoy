const ButtonTutorial = ({ video }) => {
  return (
    <div className='absolute inset-x-0 flex justify-center button-tutorial'>
      <a className='text-white' href={video} target='_blank' rel='noopener noreferrer'>
        <div className='px-4 py-2 mt-4 font-bold text-center bg-blue-500 border-b-4 border-blue-700 rounded lg:no-underline hover:bg-blue-400'>
          Tutorial
        </div>
      </a>
    </div>
  );
};

export default ButtonTutorial;

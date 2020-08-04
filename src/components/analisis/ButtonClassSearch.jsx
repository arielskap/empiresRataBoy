const ButtonClassSearch = ({ image, name, handleClick }) => {
  return (
    <div className='flex justify-center'>
      <button type='button' className='w-8 duration-200 transform border-2 border-transparent rounded buttonClassSearch hover:scale-110 hover:border-purple-600' onClick={(e) => handleClick(e, name)}>
        <img className='object-contain' src={image} alt={name} />
      </button>
    </div>
  );
};

export default ButtonClassSearch;

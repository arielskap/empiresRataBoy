const FilterButton = ({ children, handleOnClick, img, number, identity }) => {
  return (
    <div className='flex items-center justify-center w-full'>
      <button type='button' onClick={() => { handleOnClick(number); }}>
        <img className={`${identity} ${identity}-${number} object-contain filter-gray hover:filter-gray-none w-8 h-full`} src={img} alt={children} />
      </button>
    </div>
  );
};

export default FilterButton;

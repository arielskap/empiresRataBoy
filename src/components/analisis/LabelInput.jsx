const LabelInput = ({ children, value, placeholder, handleChange }) => {
  return (
    <label htmlFor={children}>
      <span className='font-bold capitalize'>{`${children} `}</span>
      <input
        className='w-full max-w-xs px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500'
        value={value}
        onChange={handleChange}
        type='text'
        name={children}
        id={children}
        placeholder={placeholder}
        tabIndex='0'
      />
    </label>
  );
};

export default LabelInput;

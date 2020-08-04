const TopCard = ({ data }) => {
  return (
    <div className='absolute bg-yellow-700 border-t-4 border-b-4 border-yellow-600 div-name center-horizontally-absolute max-w-85'>
      <div className='relative'>
        <img className='absolute object-contain w-10 img-element' src={data.src} alt={data.alt} />
      </div>
      <h2 className='px-12 text-lg font-bold text-center text-white truncate'>{data.name}</h2>
    </div>
  );
};

export default TopCard;

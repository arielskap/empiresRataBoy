const ButtonShowTalents = ({ setIsRotate, isRotate }: { setIsRotate: React.Dispatch<React.SetStateAction<boolean>>, isRotate: boolean }) => {
  return (
    <div className={`flex bg-modal items-center justify-end px-4 mb-6 md:px-0 md:mb-0`}>
      <button type='button' className='w-full px-4 py-2 font-bold text-white bg-pink-700 border-4 border-pink-600 rounded md:w-auto hover:bg-pink-600 focus:bg-pink-600 md:text-2xl' onClick={() => setIsRotate(!isRotate)}>{isRotate ? 'Ver Carta' : 'Red de Talentos'}</button>
    </div>
  )
}

export default ButtonShowTalents

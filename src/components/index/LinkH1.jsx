const LinkH1 = () => {
  const copyText = (selector) => {
    const text = document.querySelector(selector).innerText;
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    document.querySelectorAll('.tooltiptext').forEach((element) => {
      const toolTip = element;
      toolTip.innerText = 'Copiado 💖';
    });
  };
  return (
    <div className='px-2 mt-1 mb-6 text-center lg:m-0 tooltip'>
      <button type='button' onClick={() => copyText('#titleCopy')} className='px-2 py-1 text-lg font-bold break-all bg-black bg-opacity-25 rounded sm:text-xl lg:bg-transparent'>
        <span className='text-sm tooltiptext' id='myTooltip'>Copiar Link</span>
        <h1 id='titleCopy' className='hidden'>https://ratabboy.com.ar/</h1>
        <img className='object-contain md:max-w-2xl xl:max-w-4xl' src='/link.png' alt='https://ratabboy.com.ar/' />
      </button>
      <style jsx>
        {`
          .tooltip {
            position: relative;
          }

          .tooltip .tooltiptext {
            visibility: hidden;
            width: 140px;
            background-color: #011f69e1;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
            position: absolute;
            z-index: 1;
            bottom: -15%;
            left: 50%;
            margin-left: -75px;
            opacity: 0;
            transition: opacity 0.3s;
          }

          .tooltip .tooltiptext::after {
            content: "";
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent #011f69e1 transparent;
          }

          .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default LinkH1;

import React from 'react';
import '../assets/styles/tooltip.css';

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
    <div className='text-center mt-1 lg:m-0 mb-6 px-2 tooltip'>
      <button type='button' onClick={() => copyText('#titleCopy')} className='text-lg sm:text-xl font-bold break-all bg-black bg-opacity-25 lg:bg-transparent py-1 px-2 rounded'>
        <span className='tooltiptext text-sm' id='myTooltip'>Copiar Link</span>
        <h1 id='titleCopy'>https://ratabboy.herokuapp.com/</h1>
      </button>
    </div>
  );
};

export default LinkH1;

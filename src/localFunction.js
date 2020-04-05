const pageActive = (className) => {
  const ALL_LINKS = 4;
  if (!document.querySelector(`.${className}`).classList.contains('font-bold')) {
    for (let i = 1; i <= ALL_LINKS; i++) {
      if (`Link_${i}` === className) {
        document.querySelector(`.${className}`).classList.remove('text-white');
        document.querySelector(`.${className}`).classList.add('font-bold', 'text-pink-500');
      } else {
        if (document.querySelector(`.Link_${i}`).classList.contains('font-bold')) {
          document.querySelector(`.Link_${i}`).classList.add('text-white');
          document.querySelector(`.Link_${i}`).classList.remove('font-bold', 'text-pink-500');
        }
      }
    }
    if (className === 'Link_5') {
      document.querySelector(`.${className}`).classList.remove('text-white');
      document.querySelector(`.${className}`).classList.add('text-gold', 'font-bold', 'border-gold');
      document.querySelector('.Link_donar_center').classList.add('hidden');
    } else {
      document.querySelector('.Link_5').classList.add('text-white');
      document.querySelector('.Link_5').classList.remove('text-gold', 'font-bold', 'border-gold');
      if (document.querySelector('.Link_donar_center').classList.contains('hidden')) {
        document.querySelector('.Link_donar_center').classList.remove('hidden');
      }
    }
  }
};

export default pageActive;

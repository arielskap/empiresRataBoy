export const pageActive = (className) => {
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

export const fetchJson = (name, link, setFunctions) => {
  const { setOpen, setErrorResponse, setJson } = setFunctions;
  const storage = sessionStorage.getItem(name);
  if (storage) {
    setJson(JSON.parse(sessionStorage.getItem(name)));
  } else {
    fetch(`https://api.jsonbin.io/b/${link}`, {
      headers: {
        'secret-key': '$2b$10$EHpukrk1pPZzpkiyrMh1FOlbuwAP9FVrF0jGlM038V9DVWNQTpIgm',
      },
    })
      .catch((error) => {
        console.log(`Hubo un problema con la petición Fetch:${error.message}`);
      })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        if (!myJson.success && myJson.lenght <= 0) {
          if (!document.body.classList.contains('overflow-hidden')) {
            document.body.classList.add('overflow-hidden');
          }
          setOpen(true);
          setErrorResponse(myJson.message);
        } else {
          setJson(myJson);
          sessionStorage.setItem(name, JSON.stringify(myJson));
        }
      });
  }
};


export const fetchJson = (name, link, setFunctions) => {
  const { setOpen, setErrorResponse, setJson } = setFunctions;
  const storage = sessionStorage.getItem(name);
  if (storage) {
    setJson(JSON.parse(sessionStorage.getItem(name)));
  } else {
    fetch(`https://api.jsonbin.io/b/${link}`, {
      headers: {
        'secret-key': '$2b$10$rMiLIzrwZN3L0coOy9YBuO.EbU9bdYqwH79HBShMOATzq1YNKzSvC',
      },
    })
      .catch((error) => {
        console.log(`Hubo un problema con la petición Fetch:${error.message}`);
        if (!document.body.classList.contains('overflow-hidden')) {
          document.body.classList.add('overflow-hidden');
        }
        setOpen(true);
        setErrorResponse(error.message);
      })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        if ((!myJson.success && myJson.success !== undefined) || myJson.lenght <= 0) {
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

export const fetchJson2 = (url) => {
  return fetch(`https://ratabboy-api.herokuapp.com/${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((res) => {
      return { ...res, error: res.message }
    })
    .then((res) => {
      return res;
    })
};

export const getImgClassHero = (className) => {
  let classNameSrc;
  switch (className.toLowerCase()) {
    case 'barbaro':
      classNameSrc = './static/barbarian.png';
      break;
    case 'clerigo':
      classNameSrc = './static/cleric.png';
      break;
    case 'druida':
      classNameSrc = './static/druid.png';
      break;
    case 'luchador':
      classNameSrc = './static/fighter.png';
      break;
    case 'monje':
      classNameSrc = './static/monk.png';
      break;
    case 'paladin':
      classNameSrc = './static/paladin.png';
      break;
    case 'guardabosques':
      classNameSrc = './static/ranger.png';
      break;
    case 'rebelde':
      classNameSrc = './static/rogue.png';
      break;
    case 'hechicero':
      classNameSrc = './static/sorcer.png';
      break;
    case 'brujo':
      classNameSrc = './static/wizard.png';
      break;
    default:
      break;
  }
  return classNameSrc;
};

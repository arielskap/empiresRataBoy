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

export const fetchJson3 = (url) => {
  const dev = process.env.NODE_ENV !== 'production';
  const path = dev ? 'http://localhost:3000' : 'https://ratabboy.com.ar';
  return fetch(`${path}/api/${url}`, {
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
      classNameSrc = './barbarian.png';
      break;
    case 'clerigo':
      classNameSrc = './cleric.png';
      break;
    case 'druida':
      classNameSrc = './druid.png';
      break;
    case 'luchador':
      classNameSrc = './fighter.png';
      break;
    case 'monje':
      classNameSrc = './monk.png';
      break;
    case 'paladin':
      classNameSrc = './paladin.png';
      break;
    case 'guardabosques':
      classNameSrc = './ranger.png';
      break;
    case 'rebelde':
      classNameSrc = './rogue.png';
      break;
    case 'hechicero':
      classNameSrc = './sorcer.png';
      break;
    case 'brujo':
      classNameSrc = './wizard.png';
      break;
    default:
      break;
  }
  return classNameSrc;
};

export const sortById = (data) => {
  if (data.body) {
    const dataOrdened = data.body.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    data = { ...data, body: dataOrdened }
  }
}

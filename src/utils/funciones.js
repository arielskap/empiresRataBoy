export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toGMTString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

export const getCookie = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const getCookieJson = (className) => {
  const cookie = getCookie(className);
  let json;
  if (cookie) {
    json = JSON.parse(cookie);
  } else {
    json = null;
  }
  return json;
};

export const setCookieJson = (className, value) => {
  const json = JSON.stringify(value);
  setCookie(className, json, 365);
};

export const setLocalStorageJson = (className, value) => {
  const json = JSON.stringify(value);
  localStorage.setItem(className, json);
};

export const getLocalStorageJson = (className) => {
  const json = JSON.parse(localStorage.getItem(className));
  return json;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export const changeDevice = () => {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    const TAM_DESKTOP = 1024;
    const tamaño = window.innerWidth ;
    return tamaño < TAM_DESKTOP ? 'mobile' : 'desktop';
  }
  return null;
};

export const changeDeviceTablet = () => {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser) {
    const TAM_TABLET = 768;
    const tamaño = window.innerWidth ;
    return tamaño < TAM_TABLET ? 'mobile' : 'tablet';
  }
  return null;
};

export const viewportOrientation = () => {
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
};

export const initialStateCompareHeroes = (id) => ({
  _id: '',
  id,
  name: '',
  power: 0,
  element: '',
  stars: 0,
  attack: 0,
  defense: 0,
  health: 0,
  manaSpeed: '',
  class: '',
  family: '',
  event: '',
  effect: [{
    id: 0,
    data: ''
  }],
  video: '',
  img: ''
})
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

export const animateCSS = (element, animationName, callback) => {
  const node = document.querySelector(element);
  const animationNames = animationName.split(' ');
  node.classList.add('animated');
  for (let i = 0; i < animationNames.length; i++) {
    node.classList.add(animationNames[i]);
  }
  const handleAnimationEnd = () => {
    node.classList.remove('animated');
    for (let i = 0; i < animationNames.length; i++) {
      node.classList.remove(animationNames[i]);
    }
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  };

  node.addEventListener('animationend', handleAnimationEnd);
};

export const vibrar = () => {
  window.navigator.vibrate(50);
};

export const changeDevice = () => {
  const TAM_DESKTOP = 1024;
  const tamaño = window.innerWidth ;
  return tamaño < TAM_DESKTOP ? 'mobile' : 'desktop';
};

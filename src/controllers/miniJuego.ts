import store from '../store/miniJuego';

const getMiniJuego = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

export default {
  getMiniJuego,
}
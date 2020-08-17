import store from '../store/alianzas';

const getAlianzas = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

export default {
  getAlianzas,
}
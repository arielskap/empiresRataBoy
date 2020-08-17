import store from '../store/guias';

const getGuias = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

export default {
  getGuias,
}
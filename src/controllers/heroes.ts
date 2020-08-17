import store from '../store/heroes';

const getHeroes = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

export default {
  getHeroes,
}
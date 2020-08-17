import store from '../store/donaciones';

const getDonaciones = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

export default {
  getDonaciones,
}
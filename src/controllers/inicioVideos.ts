import store from '../store/inicioVideos';

const getInicioVideos = (name?: any, link?: any) => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

export default {
  getInicioVideos
}
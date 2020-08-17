import Model from '../models/inicioVideos';

const getInicioVideos = async () => {
  const inicioVideos = await Model.find();
  return inicioVideos;
}

export default {
  list: getInicioVideos,
}
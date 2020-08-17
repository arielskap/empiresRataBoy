import Model from '../models/miniJuego';

const getMiniJuego = async () => {
  const miniJuego = await Model.find();
  return miniJuego;
}

export default {
  list: getMiniJuego,
}
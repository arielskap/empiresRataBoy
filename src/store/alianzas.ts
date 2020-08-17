import Model from '../models/alianzas';

const getAlianzas = async () => {
  const alianzas = await Model.find();
  return alianzas;
}

export default {
  list: getAlianzas,
}
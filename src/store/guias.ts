import Model from '../models/guias';

const getGuias = async () => {
  const guias = await Model.find();
  return guias;
}

export default {
  list: getGuias,
}
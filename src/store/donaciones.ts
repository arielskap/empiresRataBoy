import Model from '../models/donaciones';

const getDonaciones = async () => {
  const donaciones = await Model.find();
  return donaciones;
}

export default {
  list: getDonaciones,
}
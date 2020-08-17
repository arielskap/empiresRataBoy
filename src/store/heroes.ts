import Model from '../models/heroes';

const getHeroes = async () => {
  const heroes = await Model.find();
  return heroes;
}

export default {
  list: getHeroes,
}
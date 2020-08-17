import Model from '../models/talentosHeroes';

const getTalentosHeroes = async () => {
  const talentosHeroes = await Model.find();
  return talentosHeroes;
}

export default {
  list: getTalentosHeroes,
}
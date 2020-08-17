import store from '../store/talentosHeroes';

const getTalentosHeroes = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

export default {
  getTalentosHeroes,
}
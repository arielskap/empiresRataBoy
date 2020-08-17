import mongoose from 'mongoose';

const globalAny:any = global;
const Schema = mongoose.Schema;

const mySchema = new Schema({
  className: {
    type: String,
    required: true
  },
  talents: {
    type: [],
    required: true
  }
}, {
  collection: 'TalentosHeroes'
})

globalAny.TalentosHeroesSchema = globalAny.TalentosHeroesSchema || mongoose.model('TalentosHeroes', mySchema);

export default globalAny.TalentosHeroesSchema;

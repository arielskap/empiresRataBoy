import mongoose from 'mongoose';

const globalAny:any = global;
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
}, {
  collection: "ApoyoDonaciones"
});

globalAny.ApoyoDonaciones = globalAny.ApoyoDonaciones || mongoose.model('ApoyoDonaciones', mySchema);

export default globalAny.ApoyoDonaciones;

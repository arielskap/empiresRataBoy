import mongoose from 'mongoose';

const globalAny:any = global;
const Schema = mongoose.Schema;

const mySchema = new Schema({
  objective: {
    type: String,
    required: true
  },
  dataPj: {
    type: [],
    required: true
  }
}, {
  collection: "MiniJuego"
})

globalAny.MiniJuegoSchema = globalAny.MiniJuegoSchema || mongoose.model('MiniJuego', mySchema);

export default globalAny.MiniJuegoSchema;

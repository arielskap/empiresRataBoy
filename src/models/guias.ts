import mongoose from 'mongoose';

const globalAny:any = global;
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true,
  },
  pc: {
    type: String,
    required: true
  }
}, {
  collection: 'Guiasdel Juego'
})

globalAny.GuiasDelJuegoSchema = globalAny.GuiasDelJuegoSchema || mongoose.model('Guiasdel Juego', mySchema);

export default globalAny.GuiasDelJuegoSchema;

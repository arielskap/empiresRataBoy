import mongoose from 'mongoose';

const globalAny:any = global;
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  titans: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
}, {
  collection: "AlianzasDatos"
})

globalAny.AlianzasDatosSchema = globalAny.AlianzasDatosSchema || mongoose.model('AlianzasDatos', mySchema);

export default globalAny.AlianzasDatosSchema;

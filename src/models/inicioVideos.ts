import mongoose from 'mongoose';

const globalAny:any = global;
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
}, {
  collection: "InicioVideos"
})


globalAny.InicioVideosSchema = globalAny.InicioVideosSchema || mongoose.model('InicioVideos', mySchema);

export default globalAny.InicioVideosSchema;

import mongoose from 'mongoose';
import nextConnect from 'next-connect';

mongoose.Promise = global.Promise;

const database = async (req: any, res: any, next: any) => {
  if (mongoose.connection.readyState === 0) await mongoose.connect((process.env.URLDB as string), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;

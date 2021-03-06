import response from '../../network/response';
import controller from  '../../controllers/heroes';
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  controller.getHeroes()
    .then((list:any) => {
      response.success(req, res, list, 200);
    })
    .catch((e:any) => {
      response.error(req, res, 'Unexpected Error', 500, e);
    })
})

export default handler;

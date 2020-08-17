import response from '../../network/response';
import controller from '../../controllers/talentosHeroes';
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  controller.getTalentosHeroes()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected Error', 500, e);
    })
})

export default handler;
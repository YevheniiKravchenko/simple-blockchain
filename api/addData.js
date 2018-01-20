import BlockService from '../services/blockService';

const blockService = new BlockService();

export default (req, res) => {
  const { data } = req.body;

  blockService.add(data);

  return res.sendStatus(200);
}

import blockService from '../services/blockService';

export default (req, res) => {
  const { data } = req.body;

  blockService.add(data);

  return res.sendStatus(200);
}

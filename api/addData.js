import blockService from '../services/blockService';

export default async function(req, res) {
  const data = req.body.data || Object.keys(req.body)[0];

  await blockService.add(data);

  return res.send(data);
}

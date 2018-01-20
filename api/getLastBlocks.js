import blockService from '../services/blockService';

export default async function(req, res) {
  const size = req.params.size;
  const blocks = await blockService.get(size);

  console.log(`Getting ${size} blocks...`);

  res.json(blocks);
};

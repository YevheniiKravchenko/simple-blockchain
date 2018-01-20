# simple-blockchain

Simple blockchain project.

## Installation

```
yarn
yarn start
```

Then api is available on http://localhost:3000. Takes into account `PORT` env variable.

## Endpoints

### POST /add_data
Writes new entry. When 5 entries exists - generate new block with shape:
```
{
  previous_block_hash: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
  rows: ['data1','data2','data3','data4','data5'],
  timestamp: 12123889,
  block_hash: '1b4f0e9851971998e732078544c96b36c3d01cedf7caa332359d6f1d83567014'
}
```

Supported formats form encoded data, simple text or json
```
{
  "data": "entry string"
}
```

### GET /last_blocks/:size
Gets `size` last blocks as json

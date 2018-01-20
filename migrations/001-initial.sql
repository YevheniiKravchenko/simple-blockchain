-- Up
CREATE TABLE Block (
  id INTEGER PRIMARY KEY,
  previous_block_hash TEXT,
  rows TEXT,
  timestamp INTEGER,
  block_hash TEXT
)

-- Down
DROP TABLE Block

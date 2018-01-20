import sha from 'sha.js';
import { getDB } from './dbService';

const BLOCK_SIZE = 5;

export default class {
  constructor() {
    this.pending = [];
  }

  add(data) {
    this.pending.push(data);

    console.log(`Length: ${this.pending.length}`);

    if(this.pending.length === BLOCK_SIZE) {
      this._writeBlock();
    }
  }

  // Protected scope

  async _generateBlock() {
    const previous_block_hash = await this._getPreviousBlockHash();
    const timestamp = Date.now();
    const block_hash = sha('sha256')
      .update(previous_block_hash)
      .update(this.pending)
      .update(timestamp)
      .digest('hex');

    return {
      previous_block_hash,
      rows: JSON.stringify(this.pending),
      timestamp,
      block_hash,
    };
  }

  async _getPreviousBlockHash() {
    const db = this._getDB();
    const res = await db.get('SELECT block_hash FROM Block ORDER BY timestamp DESC LIMIT 1');
    const hash = res && res.block_hash;

    return hash || '0';
  }

  async _writeBlock() {
    const db = this._getDB();
    const { previous_block_hash, rows, timestamp, block_hash } = await this._generateBlock();

    console.log(`Write block...${block_hash}`);

    await db.run(
      'INSERT INTO Block (previous_block_hash, rows, timestamp, block_hash) VALUES (?, ?, ?, ?)',
      previous_block_hash, rows, timestamp, block_hash
    );

    this.pending = [];
  }

  _getDB() {
    const db = getDB();
    if (!db) throw new Error("NOT CONNECTED TO DATABASE");

    return db;
  }
}

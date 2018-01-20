import sqlite from 'sqlite';

let _db = null;

export async function connect(path) {
  _db = await Promise.resolve()
    .then(() => sqlite.open(path, { Promise }))
    .then(db => db.migrate());
}

export const getDB = () => _db;

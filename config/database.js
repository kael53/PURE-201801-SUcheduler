import { SQLite } from 'expo';

const db = SQLite.openDatabase('201601.db');

module.exports = db;


import { SQLite } from 'expo';

const db = SQLite.openDatabase('sucheduler.db');

module.exports = db;


//const { Pool } = require('pg');
import {Pool} from 'pg'
const PG_URI =
  'postgres://rylkspcj:bpBJboDn79Fkg-yHdsiNDBHqpKIEtOkP@raja.db.elephantsql.com/rylkspcj';
const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

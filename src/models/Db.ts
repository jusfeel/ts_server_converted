import * as mysql from 'mysql';
import { Connection, Pool } from 'mysql';

class Database{

  public conn: Pool;

  constructor() {
    this.getConnection();
  }

  getConnection() : void {
    const connection = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'abcd',
      database: 'ub'
    //  port: '/var/run/mysqld/mysqld.sock'
    });

    this.conn = connection;
  }
}

export default new Database().conn;

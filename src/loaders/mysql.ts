import * as mysql from 'mysql';
import config from '@/config';

export default async (): Promise<any> => {
  const connection = mysql.createConnection({
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
  });

  if(connection) {
    console.log('SQL is intialized');
  }
  return connection;
};

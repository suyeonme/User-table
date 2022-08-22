import { createPool, Pool } from 'mysql2';
import config from '@/config';

let pool: Pool;

export const init = (): void => {
  try {
    pool = createPool({
      user: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
      connectionLimit: Number(config.DB_CONNECTION_LIMIT),
      host: config.DB_HOST,
      insecureAuth : true
    });

    console.debug('MySql Adapter Pool generated successfully.');
  } catch (error) {
    console.error('[mysql.connector][init][Error]: ', error);
    throw new Error('failed to initialized pool');
  }
};

export const getConnection = (
  query: string,
  params?: string[] | Object
) => {
  try {
    if (!pool)
      throw new Error(
        'Pool was not created. Ensure pool is created when running the app.'
      );

    return new Promise ((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  } catch (error) {
    console.error('[mysql.connector][execute][Error]: ', error);
    throw new Error('failed to execute MySQL query');
  }
};

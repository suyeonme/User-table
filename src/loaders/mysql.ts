import {
  createPool,
  Pool,
  RowDataPacket,
  OkPacket,
  ResultSetHeader,
} from 'mysql2';
import config from '@/config';
import { logger } from '@/config/winston';

let pool: Pool;

export const init = (): void => {
  try {
    pool = createPool({
      user: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
      connectionLimit: Number(config.DB_CONNECTION_LIMIT),
      host: config.DB_HOST,
      insecureAuth: true,
      multipleStatements: true,
    });
    logger.info(`MySql Adapter Pool generated successfully.`);
  } catch (error) {
    logger.error(`[mysql.connector][init][Error]: ${error}`);
    throw new Error('failed to initialized pool');
  }
};

type SqlReturnType =
  | RowDataPacket[][]
  | RowDataPacket[]
  | OkPacket
  | OkPacket[]
  | ResultSetHeader;

export const getConnection = (
  query: string,
  params?: string[] | Object
): Promise<SqlReturnType> => {
  try {
    if (!pool) {
      logger.error(
        'Pool was not created. Ensure pool is created when running the app.'
      );
    }

    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, results: SqlReturnType) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  } catch (error) {
    logger.error(`failed to execute MySQL query: ${error}`);
    throw new Error('failed to execute MySQL query');
  }
};

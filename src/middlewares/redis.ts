import { Request, Response, NextFunction } from 'express';
import * as redis from 'redis';
import { Status } from '@/types/common';

const EXPIRATION = 1440;

const redisClient: any = redis.createClient({ legacyMode: true });
redisClient.connect().catch(console.error);

/**
 * @description Save data to Redis
 */
export const setCache = <T extends unknown>(key: string, value: T) => {
  redisClient.setex(key, EXPIRATION, JSON.stringify(value));
};

/**
 * @description Get data from Redis
 */
export const getCache = (req: Request, res: Response, next: NextFunction) => {
  redisClient.get(req.url, (error: any, data: any) => {
    if (error) {
      res.status(500).send({
        status: Status.FAILED,
        data: {
          error,
        },
      });
    }

    if (!!data) {
      // Cache Hit
      res.send({
        status: Status.OK,
        data: JSON.parse(data as string),
      });
    } else {
      // Cache Miss
      next();
    }
  });
};

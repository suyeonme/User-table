import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import config from '@/config';

const { combine, timestamp, printf, colorize } = winston.format;

const logDir = 'logs'; // logs 디렉터리 하위에 로그 파일 저장
const MAX_FILE = 30; // 30일치 로그 파일 저장
const ZIPPED_ARCHIVE = true;
const COLORS = {
  [LogLevel.ERROR]: 'red',
  [LogLevel.WARN]: 'yellow',
  [LogLevel.INFO]: 'blue',
};

const enum LogLevel {
  INFO = 'info',
  ERROR = 'error',
  WARN = 'warn',
}

const enum TimeFormat {
  YYYY_MM_DD = 'YYYY-MM-DD',
}

const formatLog = printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

winston.addColors(COLORS);

const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    formatLog
  ),
  transports: [
    new winstonDaily({
      level: LogLevel.INFO,
      datePattern: TimeFormat.YYYY_MM_DD,
      dirname: logDir,
      filename: `%DATE%.log`,
      maxFiles: MAX_FILE,
      zippedArchive: ZIPPED_ARCHIVE,
    }),
    new winstonDaily({
      level: LogLevel.WARN,
      datePattern: TimeFormat.YYYY_MM_DD,
      dirname: `${logDir}/${LogLevel.WARN}`,
      filename: `%DATE%.${LogLevel.WARN}.log`,
      maxFiles: MAX_FILE,
      zippedArchive: ZIPPED_ARCHIVE,
    }),
    new winstonDaily({
      level: LogLevel.ERROR,
      datePattern: TimeFormat.YYYY_MM_DD,
      dirname: `${logDir}/${LogLevel.ERROR}`,
      filename: `%DATE%.${LogLevel.ERROR}.log`,
      maxFiles: MAX_FILE,
      zippedArchive: ZIPPED_ARCHIVE,
    }),
  ],
});

// morgan wiston 설정
const stream = {
  // write: (message: string) => {
  //   logger.http(message);
  // },
  write: (message: string) => {
    logger.info(message);
  },
};

if (config.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: combine(colorize({ all: true }), formatLog),
    })
  );
}

export { logger, stream };

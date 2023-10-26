import pino from "pino-http";
const configPino = {};

class Logger {
  logger;
  constructor() {
    this.logger = pino(configPino);
  }
}

export default new Logger().logger;

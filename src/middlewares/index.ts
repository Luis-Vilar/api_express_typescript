import Logger from "./v1/pino";
import JsonMiddleware from "./v1/json";

const middlewares = [Logger, JsonMiddleware]

export default middlewares;

import winston from 'winston';
import dateformat from 'dateformat';
import {saveLogs} from '../models/apiLogsModels.js'
const options = {
    file: {
        level: 'debug',
        filename: `./logs/${process.env.APP_NAME}_${dateformat(new Date(), "yyyy-mm-dd")}.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // max 5MB
        maxFiles: 5,
        colorize: true,
    },
    console: {
        json: true,
        colorize: true,
        level: 'info',
        handleExceptions: true

    }
};

// call winston with setting
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.simple(),
        winston.format.printf(info => `${info.timestamp} | ${info.level.toUpperCase()} | ${info.message}`),
        winston.format.colorize()
    ),
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // exception
});

const loging = async(req, res, next) => {
    let appName = process.env.APP_NAME;
    let requestTime = new Date(Date.now());
    let request = {
        method: req.method,
        url: req.url,
        body: req.body
    }

    let tmp = res.send;
    res.send = async function (data) {
        let executionTime = (new Date() - requestTime) + 'ms';
        let response = {
            statusCode: res.statusCode,
            body: (data) ? JSON.parse(data) : null
        };
        let log = {
            appName,
            requestTime: dateformat(requestTime, "yyyy-mm-dd HH:MM:ss"),
            executionTime,
            request,
            response
        }

        await saveLogs(JSON.stringify(log))

        logger.log('info', JSON.stringify(log));
        tmp.apply(res, arguments);
    }
    next();
}

export {
    logger,
    loging
}
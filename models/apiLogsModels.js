import { db } from "../config/database/database.js";

const getLogs = () => {
    return new Promise((resolve, reject) => {
        db.query(`select
	            id_api_log as "idApiLog",
                response,
                created_date as "createdDate"
            from
	            stockbit_test.api_logs
            order by
	            created_date desc`, {
            type: db.QueryTypes.SELECT,
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    })
}

const saveLogs = (response) => {
    return new Promise((resolve, reject) => {
        const queryText = `
        INSERT INTO stockbit_test.api_logs (
            response
        ) VALUES('${response}')`
        db.query(queryText, {
            type: db.QueryTypes.INSERT,
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        });
    })

}

export {
    getLogs,
    saveLogs
}

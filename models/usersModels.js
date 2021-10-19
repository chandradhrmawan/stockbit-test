import {db} from "../config/database/database.js";

const getUsers = () => {
  return new Promise((resolve, reject) => {
    db.query(`select
        a.id,
        a.username as "userName",
        b.username as "ParentUserName"
      from
        stockbit_test.users a
        left join stockbit_test.users b on b.id = a.parent
        order by a.id asc`,{
      type: db.QueryTypes.SELECT,
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  })
}

export {
  getUsers
}

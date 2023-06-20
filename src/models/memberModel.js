const { queryProcess } = require("../utils/database/queryProcess");

const getMemberModel = async (connection, memberpkey) => {
  try{

    const getMemberSql = `
      select * from member where memberpkey=?
    `;
    const params = [memberpkey];

    return await queryProcess(connection, getMemberSql, params);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getMemberModel,
}

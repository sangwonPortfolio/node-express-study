const {queryProcess} = require("../utils/database/queryProcess");

const getMemberTokenModel = async (connection, memid, token) => {
  try{
    const sql = `
    select 
        member.memberpkey,
        member.memid,
        member.nickname,
        member.profileimageurl,
        member.deleteyn,
        member.regdate
    from member
    join memtoken on member.memberpkey=memtoken.memberpkey
    where member.memid=? and memtoken.token=?
  `;
    const params = [memid, token];
    return await queryProcess(connection, sql, params);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getMemberTokenModel
}

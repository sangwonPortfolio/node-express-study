const { getMemberModel } = require("../models/memberModel");
const getConnection = require("../utils/database/getConnection");

/**
 * 회원 상세조회
 * @returns {Promise<{member: *}>}
 */
const getMemberService = async (memberpkey) => {
  let connection;
  try{
    connection = await getConnection(); //  connection pool 가져옴
    connection.beginTransaction();

    const member = await getMemberModel(connection, memberpkey);
    connection.commit(); // transaction 인경우
    return {member: member[0]};

  } catch (err) {
    console.log(err);
    if (err.name === 'DBError') {
      connection.rollback();  //  transaction 인 경우
      throw(err);
    } else {
      throw(err);
    }

  } finally {
    connection.release();
  }
}

module.exports = {
  getMemberService,
}

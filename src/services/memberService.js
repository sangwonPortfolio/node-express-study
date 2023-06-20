const { getMemberModel } = require("../models/memberModel");

const getMemberService = async (connection) => {
  try{

    // connection.beginTransaction();

    const member = await getMemberModel(connection, 1);
    // connection.commit(); // transaction 인경우
    return member[0];

  } catch (err) {

    if (err.name === 'DBERROR') {
      //  transaction 인 경우 connection.rollback();
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

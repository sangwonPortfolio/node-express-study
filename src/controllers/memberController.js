const response = require("../utils/response/index");
const getConnection = require("../utils/database/getConnection");
const memberService = require("../services/memberService");

const signInController = async (req, res) => {
  try{
    const connection = await getConnection(); //  connection pool에서 가져옴
    const body = await memberService.getMemberService(connection);
    return response(res,200,"0000", body);
  } catch (err) {
    return response(res,500,"9999", err);
  }
}

module.exports = {
  signInController,
}

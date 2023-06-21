const response = require("../utils/response/index");
const getConnection = require("../utils/database/getConnection");
const memberService = require("../services/memberService");

const signInController = async (req, res) => {
  try{
    const {member} = await memberService.getMemberService();
    return response(res,200,"0000", '', member);
  } catch (err) {
    return response(res,500,"9999", err.message, err);
  }
}

module.exports = {
  signInController,
}

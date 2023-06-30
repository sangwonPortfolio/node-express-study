const response = require("../utils/response/index");
const memberService = require("../services/memberService");
const {jwtVerify} = require("../utils/jwt/index");

exports.indexController = async (req, res) => {
  try{
    return response(res,200,"0000", '', {});
  } catch (err) {
    return response(res,500,"9999", err.message, err);
  }
}

exports.signInController = async (req, res) => {
  try{
    const {member} = await memberService.getMemberService(1);
    return response(res,200,"0000", '', member);
  } catch (err) {
    return response(res,500,"9999", err.message, err);
  }
}

exports.tokenVerifyController = async (req, res) => {
  console.log('req.member : ', req.member);
  const {token} = req.query;
  const [type, jwt] = token.split(" ");
  try{

    const decode = jwtVerify(token);
    /**
     * "decode": {
     *   "memid": 1,
     *   "iat": 1681114078
     * }
     */
    return response(res,200,"0000", '', {decode: decode});
  } catch (err) {
    console.log(err);
    return response(res,500,"9999", err.message, err);
  }
}

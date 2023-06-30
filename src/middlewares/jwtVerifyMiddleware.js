const {jwtVerify} = require("../utils/jwt/index");
const getConnection = require("../utils/database/getConnection");
const response = require("../utils/response/index");
const memTokenModel = require("../models/memTokenModel");

exports.jwtVerifyMiddleware = async (req, res, next) => {
  let connection;
  try{
    connection = await getConnection();
    //  토큰 유효성 검사
    const authorization = req.headers.authorization;
    const [type, token] = authorization.split(" ");
    if (type === undefined || token === undefined) {
      return response(res, 401, "8999", "", {});
    }
    if (type !== 'Bearer') {
      return response(res, 401, '8998', '', {});
    }

    //  토큰 복호화 검증
    const {memid, iat} = jwtVerify(token);
    //  토큰 mid 검증
    const memberToken = await memTokenModel.getMemberTokenModel(connection, memid, token);

    if (memberToken.length !== 1) {
      return response(res, 401, "8997", "", {})
    }
    const member = memberToken[0];
    //  탈퇴 회원 및 비활성 회원 검증
    if (member.deleteyn === 'Y') {
      return response(res, 401, '8996', '', {})
    }
    req.member = member;
    next();
  } catch (err) {
    return response(res,500,"9999", err.message, err);
  } finally {
    connection.release();
  }
}

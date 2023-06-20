const resMessage = require("../response/resMessage");

/**
 * response util
 * @param res
 * @param statusCode : int ex) 200, 400, 401, 409, 500, ...
 * @param resCode : string ex) '0000', '0001', ...
 * @param body : object statusCode = 200: body로 활용, statusCode = 500: error로 활용 ex) {userpkey: 1, username: ''}
 * @returns {*}
 */
const response = (res, statusCode, resCode, body = {}) => {
  if (statusCode === 500) {
    return res.status(statusCode).json({resCode: resCode, msg: resMessage[resCode] !== undefined? resMessage[resCode]: '', error: body})
  } else {
    return res.status(statusCode).json({resCode: resCode, msg: resMessage[resCode] !== undefined? resMessage[resCode]: '', body: body})
  }
}

module.exports = response;

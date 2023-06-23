const jwt = require("jsonwebtoken");
const {JWT_SECRET_KEY} = process.env

const jwtSign = (mid) => {
  const options = {
    algorithm : "HS256", // 해싱 알고리즘
    expiresIn : "90d",  // 토큰 유효 기간
    issuer : "vagabond" // 발행자
  }

  const payload = {
    mid: mid
  }

  return jwt.sign(payload, JWT_SECRET_KEY, options);

}

const jwtVerify = (token) => {
  try {
    // verify를 통해 값 decode!
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (err) {
    throw err;
    // if (err.message === 'jwt expired') {
    //     console.log('expired token');
    //     return TOKEN_EXPIRED;
    // } else if (err.message === 'invalid token') {
    //     console.log('invalid token');
    //     return TOKEN_INVALID;
    // } else {
    //     console.log("invalid token");
    //     return TOKEN_INVALID;
    // }
  }
}

module.exports = {
  jwtSign,
  jwtVerify,
}


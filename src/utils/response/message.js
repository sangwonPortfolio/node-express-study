
const message = {
  // status 200
  "0000": "성공",
  "0001": "",

  // status 400
  "4000": "파라미터 유효성 검증 실페",

  // status 401
  '8999': '토큰 형식이 올바르지 않습니다.',
  '8998': '토큰 type이 올바르지 않습니다.',
  '8997': '토큰으로 회원을 찾을 수 없습니다.',
  '8996': '탈퇴한 회원입니다.',

  // status 409

  // status 500
  "9999": "서버오류",

}

module.exports = message;
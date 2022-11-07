/**
 * 校验身份证格式是否正确
 * @param {String} value 身份证的值
 * @param {String} errorMsgPrefix 错误信息提醒前缀
 */
const checkPhoneNumber = (value, errorMsgPrefix = "手机号码") => {
  /**
   * 返回信息
   * @param {String} status 检验状态 0 校验失败 1 校验成功
   * @param {String} msg 校验失败时返回的错误信息
   * @returns
   */
  const returnInfo = (status, msg = "") => {
    return {
      status, // 0 校验失败 1 校验成功
      msg: errorMsgPrefix + msg // 校验失败时返回的错误信息
    };
  };

  if (!value) {
    return returnInfo("0", "不能为空，请重新输入！");
  }

  const Reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

  // 格式化身份证的值 去除空格
  value = (value + "").trim();

  if (!Reg.test(value)) {
    return returnInfo("0", "格式错误，请重新输入！");
  }

  return returnInfo("1");
};

export { checkPhoneNumber };

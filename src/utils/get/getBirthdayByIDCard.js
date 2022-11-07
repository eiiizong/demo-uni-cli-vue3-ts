/**
 * 根据身份证号获取出生日期
 * @param {String} idCard 身份证号
 */
const getBirthdayByIDCard = idCard => {
  // 格式化身份证的值 去除空格 将 X 转化为 x
  idCard = (idCard + "").trim().toUpperCase();

  if (!idCard) {
    console.error("身份证号码为空，请检查！");
    return "1990-01-01";
  }

  const len = idCard.length;

  let birthday = "";

  if (len == 15) {
    birthday = "19" + idCard.slice(6, 12);
  } else if (len == 18) {
    birthday = idCard.slice(6, 14);
  } else {
    console.error("身份证号码只能为15位或18位,其它不合法，请检查！");
    return "1990-01-01";
  }

  // 通过正则表达式来指定输出格式为: 1990-01-01
  birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");

  return birthday;
};

export { getBirthdayByIDCard };

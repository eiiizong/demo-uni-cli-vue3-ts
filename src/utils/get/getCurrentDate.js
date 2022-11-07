/**
 * 获取当前日期，包括年月日，不包括其他粒度
 * @param {String} fileds 日期粒度 day（默认）、 month、 year lastYearToday
 * @param {String} delimiter 分隔符 默认 -
 */
const getCurrentDate = (fileds = "day", delimiter = "-") => {
  const nowDate = new Date();

  let str = "";
  let strArr = [];

  let year = nowDate.getFullYear();
  let month = nowDate.getMonth() + 1;
  let day = nowDate.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  switch (fileds) {
    case "day":
      strArr = [year, month, day];
      break;
    case "month":
      strArr = [year, month];
      break;
    case "year":
      strArr = [year];
      break;
    case "lastYearToday":
      strArr = [year - 1, month, day];
      break;
    default:
      strArr = [year, month, day];
      break;
  }
  return str.join(delimiter);
};

export { getCurrentDate };

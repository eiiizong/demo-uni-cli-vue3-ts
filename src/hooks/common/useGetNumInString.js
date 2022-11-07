/**
 * 从字符串中获取连续的一段数字
 * @param {String} Str 字符串
 * @param {String} isFilter
 */
const useGetNumInString = (Str, isFilter) => {
  // 用来判断是否把连续的0去掉
  isFilter = isFilter || false
  if (typeof Str === 'string') {
    // var arr = Str.match(/(0\d{2,})|([1-9]\d+)/g);
    // "/[1-9]\d{1,}/g", 表示匹配1到9,一位数以上的数字(不包括一位数).
    // "/\d{2,}/g", 表示匹配至少二个数字至多无穷位数字
    let arr = Str.match(isFilter ? /[1-9]\d{1,}/g : /\d{2,}/g)
    console.log(arr)
    if (arr) {
      return arr.map(function (item) {
        // 转换为整数，
        // 但是提取出来的数字，如果是连续的多个0会被改为一个0，如000---->0，
        // 或者0开头的连续非零数字，比如015，会被改为15，这是一个坑
        // return parseInt(item);
        // 字符串，连续的多个0也会存在，不会被去掉
        return item
      })
    } else {
      return []
    }
  } else {
    return []
  }
}

export { useGetNumInString }

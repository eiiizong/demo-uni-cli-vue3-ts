// interface State {
//   userInfo:Object,
//   userList:Object
// }

const state = {
  userInfo: {
    idCard: '',
    avatarUrl:'',
    token:''
  },
  userList: {
    cpb10d: '未登录用户身份证号', // 经办用户身份证号码
    aae012: '未登录用户姓名', // 经办用户姓名
    aab301: '', // 地市编码
    che015: '5', // 经办层级 0 省 1 地市 2 区县 3 乡镇街道 4 村社区 5 个人
    chb015: '999999', // 区县编码
    chb017: '999999', // 乡镇编码
    chb018: '999999', // 村编码
    aae018: '', // 经办部门名称
    loginid: '',
  },
}

export default state

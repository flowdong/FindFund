export default {
  login: (state: { token: string }) => {
    // 计算登录状态，返回一个boolean值
    return state.token !== ''
  }
}

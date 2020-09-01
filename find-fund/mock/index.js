// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require('mockjs')
const name = Mock.mock({
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 'liu'
  }]
})
const home = Mock.mock({
  home:'get方法的mock 数据得到了'
})
const login = Mock.mock({
  'object|4': {
    '310000': '上海市',
    '320000': '江苏省',
    '330000': '浙江省',
    '340000': '安徽省'
  }
})

Mock.mock('/api/home', 'get', home)
Mock.mock('/api/login', 'post', login)
export default Mock

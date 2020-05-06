// const Mock = require('mockjs')
import Mock from 'mockjs'

Mock.setup({
    timeout:'200-600'
})

Mock.mock('http://192.168.2.121:8080/parameter/query','get',{
  status: 200,
  message: 'success',
  data: [{
      id: 1,
      name: 'zs',
      age: '23',
      job: '前端工程师'
  },{
      id: 2,
      name: 'ww',
      age: '24',
      job: '后端工程师'
  }]
})
// let configArray:any[] = [];

// // 使用webpack的require.context()遍历所有mock文件
// const files = require.context('.', true, /\.js$/);
// files.keys().forEach((key) => {
//   if (key === './index.js') return;
//   configArray = configArray.concat(files(key).default);
// });

// // 注册所有的mock服务
// configArray.forEach((item) => {
//   for (let [path, target] of Object.entries(item)) {
//     let protocol = path.split('|');
//     Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
//   }
// });
/* eslint-disable react/sort-comp */
import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import dva from './utils/dva';
import models from './models/models';
import { Provider } from '@tarojs/redux';
import './styles/base.scss';
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();
class App extends Component {
  config = {
    pages: [
      'pages/order/index',
      'pages/index/index',
      'pages/user/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './images/tab/home.png',
          selectedIconPath: './images/tab/home-active.png',
        },
        {
          pagePath: 'pages/order/index',
          text: '订餐',
          iconPath: './images/tab/cart.png',
          selectedIconPath: './images/tab/cart-active.png',
        },
        {
          pagePath: 'pages/user/index',
          text: '我的',
          iconPath: './images/tab/user.png',
          selectedIconPath: './images/tab/user-active.png',
        }
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
    },
  }
  componentDidMount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>

    )
  }
}
Taro.render(<App />, document.getElementById('app'))
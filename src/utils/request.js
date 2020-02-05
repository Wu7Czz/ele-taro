import Taro from '@tarojs/taro';

const baseURL = `https://www.fastmock.site/mock/9895ef10fbd7e42dd7d49a86d3b77585/ele/`
const noConsole = false;

export default (options = { method: 'GET', data: {} }) => {
  if (!noConsole) {
    console.log(
      `${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(
        options.data
      )}`
    );
  }
  return Taro.request({
    url: baseURL + options.url,
    data: {
      ...options.data,
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then(res => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(
          `${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,
          res.data
        );
      }
    //   if (data.status !== 'ok') {
    //     Taro.showToast({
    //       title: `${res.data.error.message}~` || res.data.error.code,
    //       icon: 'none',
    //       mask: true,
    //     });
    //   }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};

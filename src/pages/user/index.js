import Taro,{ useState, useEffect } from '@tarojs/taro';
import { View,Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

const User = props =>{
  const { user, loading } = props;
  useEffect(() => {
  })
  return (
    <View className='user-page'>
      <Text>正如你所见这是你的user页面</Text>
    </View>
  )
}
User.config = {
  navigationBarTitleText: 'user'
}
//全局样式继承 你可以关掉
User.options = {
  addGlobalClass: true
}
export default connect(({ user, loading })=>({ user,loading }))(User)
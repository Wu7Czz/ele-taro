/* eslint-disable react/no-multi-comp */
import Taro,{ useState, useEffect } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import * as indexApi from './service';
import './index.scss';
import BSSumDataPreRow from '../../components/BSSumDataPreRow'
import BSShowDataByDate from '../../components/BSShowDataByDate'

const Index = props =>{
  const { index, loading } = props;
  const [sumData, setSumData] = useState();
  const getSumData = async function(){
    const res = await indexApi.getSumData();
    setSumData(res.data);
  }
  useEffect(() => {
    props.dispatch({
      type: 'index/getSepicalDate'
    })
    getSumData();
  },[])
  return (
    <View className='index-page'>
      <BSSumDataPreRow sumData={sumData}></BSSumDataPreRow>
      <View style={{'margin':'10px'}}></View>
      <BSShowDataByDate sepicalDate={index.sepicalDate}></BSShowDataByDate>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}
//全局样式继承 你可以关掉
Index.options = {
  addGlobalClass: true
}

export default connect(({ index, loading })=>({ index,loading }))(Index)
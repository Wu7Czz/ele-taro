import Taro,{ useEffect, useState } from '@tarojs/taro';
import { View, Text, Picker } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtButton } from 'taro-ui'
import * as indexApi from './service';
import BSCustmoerPicker from '../../components/BSCustmoerPicker'
import BSBookCalendar from '../../components/BSBookCalendar'
import BSPricesInput from '../../components/BSPricesInput'
import { dateFormat } from '../../utils'
import './index.scss';

const Order = props =>{
  const { order, loading } = props;
  const [ customer, setCustomer ] = useState();
  const [prices, setPrices] = useState(["0", "6.5", "7.5"]);
  const [tempDates, setTempDates] = useState([dateFormat()]);
  const [ finalDates, setFinalDates ] = useState([]);
  const _setCustomer = value => {
    console.log(value)
    setCustomer(value);
  }
  const _setPrices = value => {
    setPrices(value);
  }
  const _setFinalDates = value => {
    console.log(value)
  }
  useEffect(() => {
  }, [])
  return (
    <View className='order-page'>
      <View className='page-section custom-picker'>
        <BSCustmoerPicker customer={customer} setCustomer={_setCustomer} ></BSCustmoerPicker>
      </View>
      <View className='page-section'>
        <BSPricesInput prices={prices} setPrices={_setPrices}></BSPricesInput>
      </View>
      <View className='page-section'>
        <BSBookCalendar tempDates={tempDates} setFinalDates={_setFinalDates} ></BSBookCalendar>
      </View>
    </View>
  )
}
Order.config = {
  navigationBarTitleText: '订餐'
}
//全局样式继承 你可以关掉
Order.options = {
  addGlobalClass: true
}
export default connect(({ order, loading })=>({ order,loading }))(Order)
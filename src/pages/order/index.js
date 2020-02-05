import Taro,{ useEffect, useState } from '@tarojs/taro';
import { View, Text, Picker } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import BSCustmoerPicker from '../../components/BSCustmoerPicker'
import BSBookCalendar from '../../components/BSBookCalendar'
import BSPricesInput from '../../components/BSPricesInput'
import { dateFormat } from '../../utils'
import { AtCheckbox } from 'taro-ui'
import './index.scss';

const Order = props =>{
  const { order, loading } = props;
  const [ customer, setCustomer ] = useState();
  const [beDates, setBeDates] = useState([dateFormat(), dateFormat()]);
  const [prices, setPrices] = useState(["0", "6.5", "7.5"]);
  const [weekendSelect, setWeekendSelect] = useState(["Sat"]);
  const [finalDates, setFinalDates] = useState([])
  const _setCustomer = value => {
    setCustomer(value);
  }
  const _setPrices = value => {
    setPrices(value);
  }
  const onBEDateChange = index => e => {
    let [begin, end] = beDates
    if (index === 0) {
      begin = e.detail.value
      if (end && begin > end) {
        end = begin;
      }
    } else {
      end = e.detail.value
      if (begin && begin > end) {
        begin = end;
      }
    } 
    setBeDates([begin, end])
  }
  const _setWeekendSelect = value => {
    setWeekendSelect(value)
  }
  const _setFinalDates = value => {
    setFinalDates(value)
  }
  useEffect(() => {
  }, [])
  return (
    <View className='order-page'>
      <View className='page-section custom-picker'>
        <BSCustmoerPicker customer={customer} setCustomer={_setCustomer} ></BSCustmoerPicker>
        {
          customer
          ? (<Text>截止当前订餐信息</Text>)
          : null
        }
      </View>
      <View className='page-section dates-picker'>
        <Text>起止日期：</Text>
        <View className='fj'>
          <Picker mode='date' onChange={onBEDateChange(0)}>
            <View className=''>
              <Text>{beDates[0]}</Text>
            </View>
          </Picker>
          <Text>至</Text>
          <Picker mode='date' onChange={onBEDateChange(1)}>
            <View className=''>
              <Text>{beDates[1]}</Text>
            </View>
          </Picker>
        </View>
      </View>
      <View className='page-section'>
        <BSPricesInput prices={prices} setPrices={_setPrices}></BSPricesInput>
      </View>
      <View className='page-section weekend-select'>
        <AtCheckbox
          options={[
            {value: 'Sat', label: '周六'}, {value: 'Sun', label: '周日'}
          ]}
          selectedList={weekendSelect}
          onChange={_setWeekendSelect}
        />
      </View>
      <View className='page-section'>
        <BSBookCalendar beDates={beDates} setFinalDates={_setFinalDates}></BSBookCalendar>
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
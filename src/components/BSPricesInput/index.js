import Taro,{ useEffect, useState } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtInputNumber } from 'taro-ui'
import './index.scss';

const BSPricesInput = props => {
  const { prices, setPrices } = props;
  const disabledInput = true;
  const change = index => value => {
    let _prices = prices.concat();
    if (index != 0) {
      if (_prices[index] === '0') {
        value = '6.5'
      } else if (value < '6.5') {
        value = '0'
      }
    } 
    _prices[index] = value.slice(0,3);
    setPrices(_prices)
  }
  if (!prices) {
    return null;
  }
  return (
    <View className='prices-input'>
      <View className='single-input'>
        <Text>早餐</Text>
        <AtInputNumber
          min={0}
          max={5}
          step={0.1}
          value={prices[0]}
          onChange={change(0)}
        />
      </View>
      <View className='single-input'>
        <Text>中餐</Text>
        <AtInputNumber
          min={0}
          max={7.5}
          step={1}
          disabledInput={disabledInput}
          value={prices[1]}
          onChange={change(1)}
        />
      </View>
      <View className='single-input'>
        <Text>晚餐</Text>
        <AtInputNumber
          min={0}
          max={7.5}
          step={1}
          disabledInput={disabledInput}
          value={prices[2]}
          onChange={change(2)}
        />
      </View>
    </View>
  )
}
export default BSPricesInput
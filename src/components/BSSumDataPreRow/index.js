import Taro, { useState, useEffect }from '@tarojs/taro';
import { AtCard } from "taro-ui";
import UIPreRow from '../UIPreRow'
import './index.scss';

const BSSumDataPreRow = props =>{
  const [sumData, setSumData] = useState([[0,0,0],[0,0,0],[0,0,0],[0,0,0]]);
  useEffect(() => {
    if (props.sumData) {
      setSumData(props.sumData)
    }
  },[props.sumData])
  return (
    <AtCard
      title='分时统计(早中晚)'
    >
      <UIPreRow name='今天' data={sumData[0]}></UIPreRow>
      <UIPreRow name='明天' data={sumData[1]}></UIPreRow>
      <UIPreRow name='本周' data={sumData[2]}></UIPreRow>
      <UIPreRow name='下周' data={sumData[3]}></UIPreRow>
    </AtCard>
  )
}
export default BSSumDataPreRow
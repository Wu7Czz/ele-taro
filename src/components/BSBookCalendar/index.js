import Taro, { useState, useEffect }from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtCalendar } from "taro-ui"
import './index.scss';

const BSBookCalendar = props => {
  const { beDates, setFinalDates } = props;
  const [ _finalDate, _setFinalDates ] = useState([]);
  // const onDayClick = selectDate => {
  //   console.log(selectDate)
  //   setFinalDates(_finalDate)
  // }
  const onSelectDate = value => {
    console.log('onSelectDate', value)
  }
  const onDayClick = value => {
    console.log('onDayClick', value)
  }
  const onDayLongClick = value => {
    console.log('onDayLongClick', value)
  }
  useEffect(() => {
    if (beDates.length) {
      _setFinalDates(_finalDate);
    }
  }, [beDates])

  return (
    <View>
      <Text>hh</Text>
      <AtCalendar isMultiSelect currentDate={{start: '2020/02/03', end:'2020/02/11'}} onDayLongClick={onDayLongClick} onDayClick={onDayClick} onSelectDate={onSelectDate} />
    </View>
  )
}
export default BSBookCalendar
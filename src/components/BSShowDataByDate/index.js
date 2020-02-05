import Taro, { useState, useEffect, showToast}from '@tarojs/taro';
import { AtCard , AtCalendar } from "taro-ui";

import './index.scss';

const BSShowDataByDate = props => {
  const dayClick = day => {
    if (Object.keys(sepicalDate).includes(day.value)) {
      showToast({
        title: sepicalDate[day.value].join(','),
        icon: 'none'
      });
    }
  }
  const [marks, SetMarks] = useState([])
  const [sepicalDate, SetSepicalDate] = useState({})
  useEffect(() => {
    SetSepicalDate(props.sepicalDate);
    const tempArray = [];
    for(const date in props.sepicalDate){
      tempArray.push({
        value: date
      })
    }
    SetMarks(tempArray)
  },[props.sepicalDate])
  return (
    <AtCard
      title='特殊日期'
    >
      <AtCalendar 
        onDayClick={dayClick}
        marks={marks}
      />
    </AtCard>
  )
}
export default BSShowDataByDate
import Taro, { useState, useEffect }from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtCalendar , AtCheckbox } from "taro-ui"
import { dateFormat, getInnerDates } from '../../utils'
import './index.scss';

const BSBookCalendar = props => {
  const { tempDates, setFinalDates, minDate } = props;
  const [weekendSelect, setWeekendSelect] = useState([6]);
  const [currentDate, setCurrentDate] = useState();
  const [ marks, setMarks ] = useState([]);
  const workDay = [1,2,3,4,5];
  const isSwiper = false;
  // const onDayClick = selectDate => {
  //   console.log(selectDate)
  //   setFinalDates(_finalDate)
  // }
  const _setMarks = value => {
    setMarks(value);
    setFinalDates(value.map(item => item.value));
  }
  const _setWeekendSelect = value => {
    setWeekendSelect(value);
    _handleMark(currentDate.start, currentDate.end, value)
  }
  const onSelectDate = data => {
    if (data.value.end) {
      _handleMark(data.value.start, data.value.end);
      setCurrentDate(data.value);
    }
  }
  const _handleMark = (start, end, _weekendSelect = weekendSelect) => {
    const _marks = [];
    getInnerDates(start, end).map(date => {
      const day = new Date(date).getDay();
      if (workDay.includes(day) || _weekendSelect.includes(day)) {
        _marks.push({value: date,day})
      }
    });
    _setMarks(_marks);
  }
  const onDayLongClick = data => {
    const _marks = marks.filter(item => item.value !== data.value);
    if (marks.length === _marks.length) {
      _marks.push({value: data.value, day: new Date(data.value).getDay()})
    }
    _setMarks(_marks);
  }

  useEffect(() => {
    if (tempDates.length) {
      console.log(1)
      const _marks = [];
      tempDates.map(date => {
        const day = new Date(date).getDay();
        if (workDay.includes(day) || weekendSelect.includes(day)) {
          _marks.push({
            value: date,
          })
        }
      })
      _setMarks(_marks);
    }
  }, [tempDates])

  return (
    <View className='book-calendar'>
      <View className='weekend-select'>
        <AtCheckbox
          options={[
            {value: 6, label: '周六'}, {value: 0, label: '周日'}
          ]}
          selectedList={weekendSelect}
          onChange={_setWeekendSelect}
        />
      </View>
      <AtCalendar
        isMultiSelect
        minDate={minDate}
        marks={marks}
        isSwiper={isSwiper}
        currentDate={currentDate}
        onDayLongClick={onDayLongClick}
        onSelectDate={onSelectDate}
      />
    </View>
  )
}
export default BSBookCalendar
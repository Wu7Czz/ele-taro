import Taro, { useState, useEffect }from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Text , Picker } from '@tarojs/components';
import './index.scss';

const BSCustmoerPicker = props => {
  const { user, setCustomer, loading } = props;
  const [ range, setRange] = useState();
  const [ showText, setShowText] = useState();
  const [ selectorIndex, setSelectorIndex] = useState([0, 0, 0]);
  const [ classIndex, setClassIndex] = useState(0);

  const  _handleShowText = (indexs) => {
    return range[0][indexs[0]].name + '-' + range[1][indexs[1]].name + '-' + range[2][indexs[2]].name
  }
  const onChange = e => {
    setSelectorIndex(e.detail.value)
    setShowText(_handleShowText(e.detail.value))
    setCustomer({
      ...range[2][e.detail.value[2]],
      showName: _handleShowText(e.detail.value),
      className: range[1][e.detail.value[1]].name,
      gradeName: range[0][e.detail.value[0]].name,
      gradeId: range[0][e.detail.value[0]].id,
    })
  }
  const onColumnChange = e => {
    const index = e.detail.value
    switch (e.detail.column) {
      case 0:
        let _classIndex = classIndex;
        if (!user.gradList[index].list[classIndex]) {
          _classIndex = 0;
        }
        setRange([user.gradList, user.gradList[index].list, user.classList[user.gradList[index].list[_classIndex].id]])
        setClassIndex(_classIndex);
        break;
      case 1:
        setRange([user.gradList, range[1], user.classList[range[1][index].id]])
        setClassIndex(index)
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    if (user.gradList.length === 0) {
      props.dispatch({
        type: 'user/getGradList'
      })
    } else if (user.studentList.length)  {
      setRange([user.gradList, user.gradList[0].list, user.classList[user.gradList[0].list[0].id]])
      setSelectorIndex([0, 0, 0])
    }
  }, [user.gradList])
  useEffect(() => {
    if (user.studentList.length === 0) {
      props.dispatch({
        type: 'user/getStudentList'
      })
    } else if (user.gradList.length)  {
      setRange([user.gradList, user.gradList[0].list, user.classList[user.gradList[0].list[0].id]])
      setSelectorIndex([0, 0, 0])
    }
  }, [user.studentList])
  return (
    <Picker mode='multiSelector' range={range} rangeKey='name' onChange={onChange} value={selectorIndex} onColumnChange={onColumnChange}>
      <View className='picker'>
        <Text>选择人员：</Text>
        <Text>{showText}</Text>
      </View>
    </Picker>
  )
}
export default connect(({ user, loading })=>({ user,loading }))(BSCustmoerPicker)
import Taro from '@tarojs/taro';
import { View,Text } from '@tarojs/components';
import './index.scss';

const Prerow = props => {
	return (
		<View className='pre-row'>
			<Text>{props.name}:</Text>
			<View className='pre-single'><Text className='color-breakfast'>{props.data[0]}</Text></View> 
			<View className='pre-single'><Text className='color-lunch'>{props.data[1]}</Text></View> 
			<View className='pre-single'><Text className='color-supper'>{props.data[2]}</Text></View> 
		</View>
	)
}
export default Prerow
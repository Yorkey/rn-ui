/**
 * Created by wangyu on 2017/6/20.
 */

import { StackNavigator } from 'react-navigation';
import {demoScreenMap} from './demoList';
import DemoListScreen from './screen/DemoListScreen';
import theme from "../src/theme";


export default DemoApp = StackNavigator({
    DemoList: {screen: DemoListScreen},
    ...demoScreenMap,
}, {
    initialRouteName: 'DemoList',
    navigationOptions: {
        headerStyle: theme.screenHeader,
        headerTitleStyle: theme.screenTitle,
    },
});
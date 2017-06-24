/**
 * Created by wangyu on 2017/6/20.
 */
import SeparatorScreen from "./screen/SeparatorScreen";

export const demoList = [
    {
        title: '分割线',
        key: "SeparatorScreen",
        screen: SeparatorScreen,
    }
];

export const demoScreenMap = demoList.reduce((pre, current) => {
    pre[current.key] = {
        screen: current.screen,
        navigationOptions: {
            title: current.title,
        }
    };
    return pre;
}, {});


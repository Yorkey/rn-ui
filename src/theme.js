/**
 * Created by wangyu on 2017/6/20.
 */
import {
    StyleSheet,
    Platform,
} from 'react-native';

export const themeValues = {
    hairline: StyleSheet.hairlineWidth,
    barHeight: Platform.select({
        android: Platform.Version < 21 ? 0 : 24,
        ios: 20,
    })
};

const theme = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    screenHeader: {
        marginTop: themeValues.barHeight,
    },
    screenTitle: {
        fontSize: 18,
        color: '#333',
    },
    lineGap: {
        marginTop: 10,
    }
});

export default theme;
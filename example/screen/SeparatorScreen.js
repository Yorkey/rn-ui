/**
 * Created by wangyu on 2017/6/20.
 */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native';
import theme from '../../src/theme';
import {demoList} from '../demoList';
import RnUI from '../../src/index';

export default class SeparatorScreen extends React.Component {

    render() {
        return (
            <ScrollView style={{backgroundColor: "#333"}}>
                <Text style={styles.tipText}>水平分割线</Text>
                <RnUI.SeparatorLine />

                <Text style={styles.tipText}>指定颜色</Text>
                <RnUI.SeparatorLine color="#ff0" />

                <Text style={styles.tipText}>带间距， 默认15</Text>
                <RnUI.SeparatorLine margin backgroundColor="#333" />

                <Text style={styles.tipText}>自定义间距</Text>
                <RnUI.SeparatorLine margin={30} backgroundColor="#f2f2f2" color="#ff0" />

                <Text style={styles.tipText}>垂直分割线</Text>
                <ScrollView style={styles.verticalContainer} horizontal>

                    <Text style={styles.tipTextV}>默认</Text>
                    <RnUI.SeparatorLine vertical />

                    <Text style={styles.tipTextV}>指定颜色</Text>
                    <RnUI.SeparatorLine vertical color="#ff0" />

                    <Text style={styles.tipTextV}>带间距， 默认15</Text>
                    <RnUI.SeparatorLine margin vertical backgroundColor="#333" />

                    <Text style={styles.tipTextV}>自定义间距</Text>
                    <RnUI.SeparatorLine margin={30} vertical backgroundColor="#f2f2f2" color="#ff0" />
                </ScrollView>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tipText: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
    },
    verticalContainer: {
        height: 100,
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#666",
    },
    tipTextV: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 15,
        marginRight: 5,
    },
});
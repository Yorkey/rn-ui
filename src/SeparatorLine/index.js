/**
 * Created by wangyu on 2017/6/20.
 */
import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

export default function ({vertical, margin, color="#eee", backgroundColor="#fff", containerStyle}) {

    let widthStyle = vertical ? styles.vWidth : styles.hWidth;
    if (margin) {
        if (typeof margin !== "number") {
            margin = 15;
        }
        let marginStyle = vertical ? {marginTop: margin, marginBottom: margin} : {marginLeft: margin};
        return (
            <View style={[containerStyle, {backgroundColor: backgroundColor}]}>
                <View style={[{flex: 1, backgroundColor: color}, marginStyle, widthStyle]} />
            </View>
        );
    } else {
        return <View style={[containerStyle, widthStyle, {backgroundColor: color}]} />;
    }
}

const styles = StyleSheet.create({
    hWidth: {
        height: StyleSheet.hairlineWidth,
    },
    vWidth: {
        width: StyleSheet.hairlineWidth,
    }
});
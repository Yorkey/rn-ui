/**
 * Created by wangyu on 2017/6/20.
 */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';
import theme from '../../src/theme';
import {demoList} from '../demoList';
import RnUI from '../../src/index';

function DemoItem({title, screenKey, onPress}) {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(screenKey)}>
            <Text style={styles.itemTitle}>{title}</Text>
        </TouchableOpacity>
    );
}

function DemoItemSeparator() {
    return <RnUI.SeparatorLine margin/>;
}

function GapHeader() {
    return <View style={theme.lineGap} />;
}

export default class DemoListScreen extends React.Component {

    static navigationOptions = {
        title: 'RnUI Demo',
    };

    onItemPress = (screenKey) => {
        const { navigate } = this.props.navigation;
        navigate(screenKey);
    };

    renderItem = ({item, index}) => (
        <DemoItem title={item.title} screenKey={item.key} onPress={this.onItemPress} />
    );

    render() {
        return (
            <View style={theme.screenContainer}>
                <FlatList
                    data={demoList}
                    renderItem={this.renderItem}
                    ListHeaderComponent={GapHeader}
                    ItemSeparatorComponent={DemoItemSeparator}
                    ListFooterComponent={RnUI.SeparatorLine}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    itemTitle: {
        fontSize: 16,
        color: '#333'
    },
});
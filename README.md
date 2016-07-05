# React Native Classnames

## Usage
```js
// ...
import cn from 'react-native-classnames';

class ReactNativeComponent extends Component {
    renderRow = (item, something, index) => {
        const StoreItemStyles = cn(style, 'StoreItem', {StoreItemFirst: index === '0'});
        return (
            <TouchableHighlight
                onPress={() => this.props.onForward(item.id)}
                accessibilityLabel={`StoreItem StoreItem_${index}`}>
                <View style={StoreItemStyles}>
                    <Text style={style.StoreItemName} accessibilityLabel="StoreItemName">
                        {item.name}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={style.StoreListWrapper}>
                <ListView
                    dataSource={this.props.stores}
                    renderRow={this.renderRow}
                    initialListSize={10}
                    accessibilityLabel="StoreList"
                    enableEmptySections
                />
            </View>
        );
    }
}

const style = {
    StoreListWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    StoreItem: {
        marginTop: 15,
        marginLeft: 0,
        width: 400,
        backgroundColor: '#c3c3c3',
        flex: 1,
        alignItems: 'center',
    },
    StoreItemFirst: {
        marginTop: 0,
    },
    StoreItemName: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
    },
};
```
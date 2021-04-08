import * as React from 'react';
import {
    Animated,
    FlatList,
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,

} from 'react-native';

const { width, height } = Dimensions.get('window')


const SPACING = 20;
const ITEMSIZE = width - (SPACING * 2);
const SPACER_ITEM_SIZE = (width - ITEMSIZE) / 2;

const slideData = [
    {
        id: 1,
        title: 'Hello',
        imageUrl: "https://images.unsplash.com/photo-1617182748608-8a2c8f518618?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
        id: 2,
        title: 'Hello',
        imageUrl: 'https://images.unsplash.com/photo-1617182748608-8a2c8f518618?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
        id: 3,
        title: 'Hi',
        imageUrl: "https://images.unsplash.com/photo-1617182748608-8a2c8f518618?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
        id: 4,
        title: 'Hi',
        imageUrl: "https://images.unsplash.com/photo-1617182748608-8a2c8f518618?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
]


export default function Slide({ navigation }) {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <Animated.FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}
            snapToInterval={ITEMSIZE} // snap item when we scroll
            decelerationRate={0}
            bounces={false} //clear bounce effect on andriod
            data={slideData}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
            renderItem={({ item, index, separators }) => {
                const inputRange = [
                    (index - 1) * ITEMSIZE,
                    index * ITEMSIZE,
                    (index + 1) * ITEMSIZE,
                ]
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                })
                return <Animated.View style={{
                    marginHorizontal: 20,
                    width: ITEMSIZE,
                    height: ITEMSIZE / 0.7,
                    backgroundColor: '#ddd',
                    padding: 10,
                    borderRadius: 10,
                    transform: [{ scale }]
                }}>
                    <View style={{
                        marginHorizontal: SPACING,
                        alignItems: "center",
                        borderRadius: 50,
                    }}>
                        <Image
                            style={{ width: '100%', height: '100%', borderRadius: 15, }}
                            resizeMode="cover"
                            source={{ uri: item.imageUrl }}
                        />
                        <Text>{item.title}</Text>
                    </View>
                </Animated.View>

            }}
        />

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        
    },
})
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

const ITEMSIZE = width * 0.72;
const SPACING = 20;
const SPACER_ITEM_SIZE = (width - ITEMSIZE) / 2;

const slideData = [
    {
        id: 1,
        title: 'Hello',
        imageUrl: 'https://contentserver.com.au/assets/646095_523722_p12543972_p_v8_ab.jpg'
    },
    {
        id: 2,
        title: 'Hello',
        imageUrl: 'https://i.ytimg.com/vi/EWa7a2fFid0/maxresdefault.jpg'
    },
    {
        id: 3,
        title: 'Hi',
        imageUrl: 'https://i.ytimg.com/vi/EWa7a2fFid0/maxresdefault.jpg'
    },
    {
        id: 3,
        title: 'Hi',
        imageUrl: 'https://i.ytimg.com/vi/EWa7a2fFid0/maxresdefault.jpg'
    }
]

export default function Slide({ navigation }) {
    const [movices, setMovices] = React.useState(slideData)
    const scrollX = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        const fetchData = async () => {
            const movies = await getMovies();
            // [spacer, ...movies, spacer]
            setMovies([{ key: 'left-spacer' }, ...movies, { key: 'right-spacer' }]);
        };

        if (movies.length === 0) {
            fetchData(movies);
        }
    }, [movies]);
    return (
        <View style={styles.container}>
            <Animated.FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
                snapToInterval={ITEMSIZE} // snap item when we scroll
                decelerationRate={0}
                bounces={false} //clear bounce effect on andriod
                data={movices}
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
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, -50, 0],
                    })
                    return (
                        <View style={{
                            width: ITEMSIZE,
                            height: 500,

                        }}>
                            <Animated.View style={{
                                paddingHorizontal: SPACING,
                                alignItems: "center",
                                borderRadius: 50,
                                width: ITEMSIZE,
                                transform: [{ translateY }]
                            }}>
                                <Image
                                    style={{ width: '100%', height: '100%', borderRadius: 15, }}
                                    resizeMode="cover"
                                    source={{
                                        uri: item.imageUrl
                                    }}
                                />
                                <Text>{item.title}</Text>
                            </Animated.View>

                        </View>
                    )
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        padding: 15,
        width: width,
        height: width * 1 / 2
    },
})
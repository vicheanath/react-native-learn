import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                style={styles.btn}
                title="Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                style={{margin: 50}}
                title="Slide"
                onPress={() => navigation.navigate('Slide')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:15,
        flex: 1,
        flexDirection:'column'
    },
    btn: {
        marginVertical:15,
    }
})
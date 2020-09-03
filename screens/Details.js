import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


export default function Details({ navigation }) {
    return (
        <View style={styles.container}>
            {/* <Button
                style={styles.btn}
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    }
})
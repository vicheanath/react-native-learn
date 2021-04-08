import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity
                title="Slide"
                onPress={() => navigation.navigate('Slide')}
            >
                <Text style={styles.text}>Learn How to build slide</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 10,
        backgroundColor: '#d35400',
    },
    text: {
        color: '#000'
    }
})
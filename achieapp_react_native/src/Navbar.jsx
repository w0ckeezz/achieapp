import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab'
    },
    text: {
        color: '#fff',
        fontSize: 32,
        marginBottom: 10
    },
})
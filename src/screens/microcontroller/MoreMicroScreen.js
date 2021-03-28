import React from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'

const MoreMicroScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>More Information about Microcontroller</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
})

export default MoreMicroScreen
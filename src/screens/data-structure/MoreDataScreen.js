import React from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'

const MoreDataScreen = ({ navigator }) => {
    return (
        <View>
            <Text style={styles.textStyle}>Data Structure Information</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
})

export default MoreDataScreen
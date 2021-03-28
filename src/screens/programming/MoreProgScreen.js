import React from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'

const MoreProgScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>C Programming Information here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
})

export default MoreProgScreen
import React from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MicrocontrollerScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyle}>Welcome To 8051 Microcontroller</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MoreMicro') }>
                <Image 
                    source={require('../../../assets/microcontroller.jpg')}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    },
    imageStyle: {
        height: 400,
        width: 400,
    }
})

export default MicrocontrollerScreen
import React from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProgrammingScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyle}>Welcome To C Programming</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MoreProg') }>
                <Image 
                    source={require('../../assets/programming.png')}
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

export default ProgrammingScreen
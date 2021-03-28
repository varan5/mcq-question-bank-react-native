import React from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'

const WishScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyle}>       All The Best !</Text>
            <Image 
                source={require('../../../assets/logo.png')}
                style={styles.imageStyle}
            />
            <Button 
                title="Go Back"
                color="teal"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
    },
    imageStyle: {
        marginTop: 50,
        height: 400,
        width: 360,
    },
    buttonStyle: {

    }
})

export default WishScreen
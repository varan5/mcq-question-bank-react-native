import React from 'react'
import { View, StyleSheet, Text, Button, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DataStructureScreen = ({ navigation }) => {
    return (
        <View>
            <Button 
                title="Array"
                onPress={() => navigation.navigate('Array')}
            />
            <TouchableOpacity onPress={() => navigation.navigate('MoreData')}>
                <Image 
                    source={require('../../assets/data-structure.jpg')}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 400,
        width: 360,
    }
})

export default DataStructureScreen
import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button 
        title="Data Structures" 
        onPress={() => navigation.navigate('Data')}
      />
      
      <Button 
        title="8051 Microcontroller"
        onPress={() => navigation.navigate('Micro')}
      />
               
      <Button 
        title="C Programming"
        onPress={() => navigation.navigate('Programming')}
      />
 
      <View style={styles.gapView}>
      
      </View>
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate('Wish')}>
        <Image
          source={require('../../assets/logo2.png')}
          style={styles.logo}
        />

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 350,
    width: 360,
    marginTop: 150,
  },
  gapView: {
    height: 200,
    width: 400,
    marginBottom: -100
  },
})

export default HomeScreen
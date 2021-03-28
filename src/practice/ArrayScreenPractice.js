import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Question from "../components/Question";

const ArrayScreen = () => {
  const [images, setimages] = useState([
    require("../../assets/1.jpg"),
    require("../../assets/2.jpg"),
    require("../../assets/3.jpg"),
    require("../../assets/4.jpg"),
    require("../../assets/5.jpg"),
    require("../../assets/6.jpg"),
    require("../../assets/7.jpg"),
    require("../../assets/8.jpg"),
    require("../../assets/9.jpg"),
    require("../../assets/10.jpg"),
  ]);

  return (
    <View>
      <Text>Let's Learn About Array</Text>
      <FlatList
        vertical={true}
        showsVerticalScrollIndicator={false}
        data={images}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <Image source={item} key={index} style={styles.imageStyle} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    marginVertical: 20,
    height: 300,
    width: 360,
  },
});

export default ArrayScreen;

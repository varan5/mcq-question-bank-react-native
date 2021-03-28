import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Question = ({ question, answer, id }) => {
  return (
      <View>
      <Text>Q.  {question}</Text>
      <Text>A.  {answer}</Text>
      <Text>Id. {id}</Text>
      </View>

  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    width: 366,
    marginVertical: 20,
  },
});

export default Question;

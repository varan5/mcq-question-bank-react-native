import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Question = ({ id, question, options, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  return (
      <View>
      <Text>{id}.  {question}</Text>
      <Button 
        title="Check Answer"
        onPress={() => setShowAnswer(!showAnswer)}
      />
      <Button 
        title="Show Explanation"
        onPress={() => setShowExplanation(!showExplanation)}
      />
      <Text>a. {options.a}</Text>
      <Text>b. {options.b}</Text>
      <Text>c. {options.c}</Text>
      <Text>d. {options.d}</Text>
      <Text>{showAnswer ? `${answer.option}. ${answer.value}`: ''}</Text>
      <Text>{showExplanation ? `${answer.option}. ${answer.value} Explanation: ${answer.explanation}.`: ''}</Text>
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

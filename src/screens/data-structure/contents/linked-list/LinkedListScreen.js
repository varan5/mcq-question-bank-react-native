import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Question from "../../../../components/Question";
import LinkedListData from "../../../../data/data-structure-data/LinkedListData.json";

const LinkedListScreen = () => {
  return (
    <View>
      {LinkedListData.map((value) => {
        return (
          <Question
            question={value.question}
            options={value.options}
            answer={value.answer}
            id={value.id}
          />
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({});

export default LinkedListScreen;

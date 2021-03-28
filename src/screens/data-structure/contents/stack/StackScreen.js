import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Question from '../../../../components/Question'
import StackData from '../../../../data/data-structure-data/StackData.json'

const StackScreen = () => {
  return (
    <View>
      {StackData.map(value => {
        return (
          <Question 
            question={value.question}
            options={value.options}
            answer={value.answer}
            id={value.id}
          />
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({

})

export default StackScreen
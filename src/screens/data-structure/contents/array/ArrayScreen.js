import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Question from '../../../../components/Question'
import ArrayData from '../../../../data/data-structure-data/ArrayData.json'

const ArrayScreen = () => {
  // console.log(ArrayData[0].question)
  const someData = ArrayData.map(value => { return value })
  console.log(someData)

  return (
    <View>
      {ArrayData.map(value => {
        return (
          <Question 
            question={value.question}
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

export default ArrayScreen
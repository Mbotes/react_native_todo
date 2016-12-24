/**
 * Created by michaelbotes on 2016/12/24.
 */
import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

const Input = ({ inputValue, inputChange }) => (
  <view style={styles.inputContainer}>
      <TextInput value={inputValue}
                 style={styles.input}
                 placeholder="What needs to be done?"
                 placeholderTextColor='#CACACA'
                 selectionColor='#666666'
                 onChangeText={inputChange}/>
  </view>
);

const styles = StyleSheet.create({
   inputContainer: {
       marginLeft: 20,
       marginRight: 20,
       shadowOpacity: 0.2,
       shadowRadius: 3,
       shadowColor: '#000000',
       textShadowOffset: {width: 2, height: 2}
   },
    Input: {
       height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default Input
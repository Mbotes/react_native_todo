/**
 * Created by michaelbotes on 2016/12/24.
 */
import React, { Component } from 'react'
import { View, ScrollView, StyleSheet} from 'react-native'

class App extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <View />
                </ScrollView>
          </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex:1,
       backgroundColor: '#f5f5f5'
   },
    content: {
       flex:1,
        paddingTop: 60
    }
});

export default App
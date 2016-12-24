/**
 * Created by michaelbotes on 2016/12/24.
 */
import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({todos}) => {
    todos = todos.map((todos, i) => {
        return (
            <Todo key={i} todo={todos}/>
        )
    });
    return (
        <View>
            {todos}
        </View>
    )
};

export default TodoList
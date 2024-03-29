/**
 * Created by michaelbotes on 2016/12/24.
 */
import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, toggleComplete, deleteTodo, type }) => {
    const getVisibleTodos = ( todos, type ) => {
        switch (type) {
            case 'All':
                return todos;
            case 'Complete':
                return todos.filter((t) => t.complete);
            case 'Active':
                return todos.filter((t) => !t.complete);
        }
    };
    todos = getVisibleTodos(todos, type);
    todos = todos.map((todo, i) => {
        return (
            <Todo
                toggeComplete={toggleComplete}
                deleteTodo={deleteTodo}
                key={i}
                todo={todo}/>
        )
    });
    return (
        <View>
            {todos}
        </View>
    )
};

export default TodoList
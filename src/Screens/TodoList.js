import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../Redux/todoSlice";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const TodoList = () => {

    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todos)

    const onSubmitTask = () => {
        if (todo.trim().length === 0) {
            alert("You need to enter a task");
            setTodo("");
            return;
        }
        dispatch(
            addTodo({
                task: todo
            })
        )
        setTodo("");
    }

    const onDelete = (id) => {
        dispatch(
            deleteTodo({
                id: id,
            })
        );
    };

    const renderItem = (e) => {

        return (
            <ScrollView>
                <View style={styles.view1}>
                    <Text style={{ fontSize: 20, color: 'black' }}>{e.item.name}</Text>
                    <TouchableOpacity onPress={() => onDelete(e.item.id)}>
                        <Ionicons name='md-trash-outline' size={28} color={'#00308F'} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );

    }



    return (
        <View style={styles.Screen}>

            <StatusBar backgroundColor={'white'} barStyle="dark-content" />

            <Text style={styles.welcometext}>Create Todo List</Text>


            <TextInput
                mode="outlined"
                placeholder="Add Task"
                value={todo}
                onChangeText={todo => setTodo(todo)}
                style={styles.textinput}
            />

            <Button
                mode="contained"
                style={styles.button}
                labelStyle={ styles.buttonlabel}
                contentStyle={styles.buttoncontent}
                onPress={onSubmitTask}
            >
                Add Todo
            </Button>

            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />



        </View>
    )
}

const styles = StyleSheet.create({

    Screen: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    welcometext: {
        fontSize: 25,
        color: '#00308F',
        fontWeight: '800',
        alignSelf: 'center',
        margin: 30,
        marginTop: 40
    },
    view1: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        width: Dimensions.get('window').width * 0.8,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 10
    },

    textinput: {
        width: Dimensions.get('window').width * 0.8,
        height: 50,
        alignSelf: 'center',
        marginBottom: 25,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#00308F',
        width: Dimensions.get('window').width * 0.8,
        height: 50,
        alignSelf: 'center',
        borderRadius: 5
    },
    buttonlabel: {
        fontSize: 15,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttoncontent: { 
        height: 50, 
        backgroundColor: '#00308F', 
        alignSelf: 'center', 
        justifyContent: 'center' 
    }


})

export default TodoList
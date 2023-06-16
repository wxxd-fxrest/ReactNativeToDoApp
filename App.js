import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Platform} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todoStorage from './storages/todosStorage';

const App = () => {
  const today = new Date();
  
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  // useEffect는 순서대로 작동하기 때문에,
  // 저장하는 useEffect가 먼저 오면 제대로 작동하지 않음.
  useEffect(() => {
    // 불러오기
    todoStorage.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    // 저장 
    todoStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = text => {
    // 새로 등록할 항목의 id를 구합니다.
    // 등록된 항목 중에서 가장 큰 id를 구하고, 그 값에 1을 더합니다. 
    // 만약 리스트가 비어있다면 1을 id로 사용합니다. 
    const nextID = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextID,
      text, 
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = 
      todos.map(todo => todo.id === id ? 
          {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  // // useEffect는 순서대로 작동하기 때문에,
  // // 저장하는 useEffect가 먼저 오면 제대로 작동하지 않음.
  // useEffect(() => {
  // // 불러오기 
  //   const load = async () => {
  //     try {
  //       const rawTodos = await AsyncStorage.getItem('todos');
  //       const savedTodos = JSON.parse(rawTodos);
  //       setTodos(savedTodos);
  //     } catch (e) {
  //       console.log('Faild to load todos');
  //     }
  //   }
  //   load();
  // }, []);

  // useEffect(() => {
  // // 저장 
  //   const save = async () => {
  //     try {
  //       await AsyncStorage.setItem('todos', JSON.stringify(todos));
  //     } catch (e) {
  //       console.log('Failed to save todos');
  //     }
  //   }
  //   save();
  // }, [todos]);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView 
          behavior={Platform.OS == 'ios' ? 'padding' : undefined}
          style={styles.avoid}>
        <DateHead date={today}/>
        {todos.length === 0 ? <Empty /> : 
          <TodoList 
            todos={todos} 
            onToggle={onToggle} 
            onRemove={onRemove}/>}
        <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "#26a69a"
  },
  avoid: {
    flex: 1,
  }, 
});

export default App; 

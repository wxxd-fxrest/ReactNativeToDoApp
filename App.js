import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import DateHead from './components/DateHead';
import Empty from './components/Empty';

const App = () => {
  const today = new Date();
  
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={today}/>
        <Empty />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "#26a69a"
  },
});

export default App; 

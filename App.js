import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {
  const [items, setItems] = useState([
     {id: uuid(), text: 'Milk'},
     {id: uuid(), text: 'ssdf'},
     {id: uuid(), text: 'Egg'},
     {id: uuid(), text: 'Egsfsfd'},
     {id: uuid(), text: 'Egsfssfsfd'},
     {id: uuid(), text: 'Egsddfsfd'},
     {id: uuid(), text: 'Egsfsdfdfsfd'},
  ]);
  
  const deleteItem = (id) => {
    setItems(prevItem => prevItem.filter(item => item.id != id))
  }

  const addItem = (text, setText) => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item...', { text: 'Ok' });
    }else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems]
      });
      setText('');
    }
    
  }

  return (
    <View style={styles.mainView}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({ item }) => (<ListItem item={item} deleteItem={deleteItem}/>)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
})

export default App;
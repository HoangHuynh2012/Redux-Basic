/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {v4 as uuidv4} from 'uuid';

import {useDispatch, useSelector} from 'react-redux';
import {addItem, deleteItem} from '~redux/actions';

const ToDoList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const list = useSelector(state => state.todoList);
  const handlePress = () => {
    if (data.length > 0) {
      setData('');
      dispatch(addItem({id: uuidv4(), title: data}));
    } else {
      Alert.alert('Value Wrong', [{text: 'OK'}]);
    }
  };
  const handleLongPress = value => {
    Alert.alert('Delete Item', 'Id: ' + value, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => dispatch(deleteItem({id: value})),
      },
    ]);
  };
  const Item = ({item, onPress, onLongPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.item, backgroundColor]}
      hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
      <Text style={[styles.title, textColor]}>{item?.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item?.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item?.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onLongPress={() => handleLongPress(item.id)}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>To Do APP</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={value => setData(value)}
        clearButtonMode="always"
        value={data}
      />
      <TouchableOpacity onPress={() => handlePress()} style={styles.btnAddItem}>
        <Text style={{color: 'white'}}>Thêm</Text>
      </TouchableOpacity>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 0,
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: '#6e3b6e',
    fontSize: 22,
  },
  item: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6e3b6e',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textHeader: {
    fontSize: 24,
  },
  btnAddItem: {
    backgroundColor: '#6e3b6e',
    padding: 15,
    marginHorizontal: 16,
    alignItems: 'center',
    width: '20%',
    borderRadius: 10,
  },
});

export default ToDoList;

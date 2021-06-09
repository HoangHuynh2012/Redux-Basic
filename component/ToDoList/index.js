import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {createStore} from 'redux';

const index = () => {
  // khai báo data và state
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
  ];
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState();
  const [list, setList] = useState(DATA);
  // giao dien cac item
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  //Reducer
  function addToDoList(state = DATA, action) {
    switch (action.type) {
      case 'ADD':
        var newList = [...list];
        newList.push(action.data);
        return setList(newList);
      default:
        return state;
    }
  }
  //store
  let store = createStore(addToDoList);
  store.subscribe(() => console.log(store.getState()));
  // function add Data
  function addData() {
    // lấy mili giây là id
    var d = new Date();
    var n = d.getMilliseconds();
    setData('');
    store.dispatch({type: 'ADD', data: {id: n, title: data}});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>To Do APP</Text>
      <TextInput
        style={styles.input}
        onChangeText={value => setData(value)}
        clearButtonMode="always"
        value={data}
      />
      <TouchableOpacity onPress={addData}>
        <Text>Thêm</Text>
      </TouchableOpacity>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default index;

import React, {useState} from 'react';
import styled from 'styled-components';
import lista from './src/lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListaItemSwipe from './src/components/ListaItemSwipe';
import AsyncStorage from '@react-native-community/async-storage'

const Page = styled.SafeAreaView`
  flex:1;
`;
const Listagem = styled.FlatList`
  flex:1;
`;

export default () => {
  const [items, setItems] = useState(lista);

  const addNewItem = (txt) => {
    let newItems = [...items];
    newItems.push({
      id:uuidv4(),
      task:txt,
      done:true
    });
    setItems(newItems);
  }
  
  const toggleDone = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  const deleteItem = (index) => {
   let newItems = [...items];
   newItems = newItems.filter((it, i) =>i !=index);
   setItems(newItems); 
  }

  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView
        data={items}
        renderItem={({item, index})=><ListaItem onPress={()=>toggleDone(index)} data={item} />}
        renderHiddenItem={({item, index}) =><ListaItemSwipe onDelete={()=>deleteItem(index)} />}
        leftOpenValue={60}
        disableLeftSwipe={true}
        keyExtractor={(item)=>item.id}
        />
    </Page>
  );
}
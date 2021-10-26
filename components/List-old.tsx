import React, { useState } from 'react'
import {
  Box,
  FlatList as NbFlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  Pressable,
  NativeBaseProvider,
} from "native-base"
import { AntDesign } from '@expo/vector-icons'

const Item = ({ item, onPress }: any) => (
  <Pressable onPress={onPress} 
    alignContent="stretch"
  >
      <HStack
        p="5" 
        my="2" 
        rounded="lg"  
        bg="cyan.700"
        space="lg"
        flex={1}
      >
        <Center flex={1}><Box>{item.code}</Box><Box>{item.code}</Box></Center>
        <Center flex={1}><Box>{item.grade}</Box></Center>
        <Center flex={1}><Box>{item.score}</Box></Center>
        <Center flex={1}><AntDesign name="right" size={24} color="black" /></Center>
      </HStack>
  </Pressable>
)

export const List = (props) => {

  const [selectedId, setSelectedId] = useState(null)

  const renderItem = ({item} : any) => (
    <Item
      item={item}
      onPress={() => {
        setSelectedId(item.id)
        console.log('item.id: ', item.id)
      }} 
    />
  )

  return (
    props.data.length > 0 ? 
    <NbFlatList 
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item: any) => `${item.id}`}
      extraData={selectedId}
    /> : <Text>No Classes to display</Text>
  )
}

/**
 * data: [],
 * style: {},
 * dispatch: {
 *  type: '',
 *  payload: {}
 * } 
*/
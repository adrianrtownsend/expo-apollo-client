import React, { useContext, useEffect, useState } from 'react'
import { FlatList as NbFlatList } from 'native-base'

import { IList } from '../../types'

import { AppContext } from '../../AppContext'

import ListItem from './ListItem'

const List = (props: IList): JSX.Element | any => {
  const app = useContext(AppContext)

  const [data, setData] = useState([])

  let isLoaded = false

  useEffect(() => {
    isLoaded = true

    const fetchListItems = async () => {
      try {
        const item = await app.apiContext.action(props.action)

        if(isLoaded) {
          setData(item)
        }
      } catch (e) {
        
      }
    }

    fetchListItems()

    return () => {
    isLoaded = false 
    }
  }, [data])

  const renderItem = ({item}: any) => (
    <ListItem 
      item={item}
      onPress={() => {console.log('navigation context')}}
      style={props.style}
    />
  )

  return isLoaded ? (
    <NbFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: any) => `${item.id}`}
    />
  ) : 'Loading'
}

export default List
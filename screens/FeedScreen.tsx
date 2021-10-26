import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { Box, HStack, StatusBar, Text } from 'native-base'

import Content from '../components/Content'
import Heading from '../components/Heading'
import List from '../components/List'
import Select from '../components/Select'

const filters = [
  {
    label: 'Classes',
  },
  {
   label: 'Assignments'
  }
];

const FeedScreen = ({ route }: any) => {

  const [state, setstate] = useState()

  useFocusEffect(
    useCallback(() => {
    }, [])
  )

  return (
    <Box flex={1} p="5">
      <StatusBar />
      <Heading
        route={route}
        data={state}
      />
      <Select data={filters} />
      <Content flex={4}>

      </Content>
    </Box>
  );
};

export default FeedScreen
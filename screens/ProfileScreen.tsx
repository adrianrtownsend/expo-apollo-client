import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { EditOutlined } from '@ant-design/icons'
import { Avatar, Box, HStack, Text, VStack, StatusBar } from 'native-base'

import Attributes from '../components/Attributes'
import Content from '../components/Content'
import Heading from '../components/Heading'
import List from '../components/List'
import Select from '../components/Select'

import * as Test from '../testData.json'

// change to either context or mutations
const filters = [
  {
    label: 'Classes',
  },
  {
   label: 'Assignments'
  }
];

const stats = [
  { label: 'Classes', value: '8' },
  { label: 'Assignments', value: '30' }
]


const Profile = ({ route }: any) => {

  const [profile, setProfile] = useState({})

  useFocusEffect(
    useCallback(() => {
    }, [])
  )

  return (
    <Box flex={1} p="5">
      <StatusBar />
      <Heading route={route}>
        <HStack
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Avatar
            bg="pink.600"
            size="xl"
            source={{
              uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
            }}
          ></Avatar>
          <VStack>
            {/* Username */}
            <Text>{'student0123'}</Text>
            {/* Email */}
            <Text>{'testmail@mail.com'}</Text>
          </VStack>
          <EditOutlined />
        </HStack>
      </Heading>
      <Attributes data={stats} />
      <Select data={filters} />
      <List
        action={{
          type: 'query',
          operation: 'get',
          model: 'Class',
          variables: {}
        }}
      />
    </Box>
  ) 
}

export default Profile
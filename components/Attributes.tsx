import * as React from 'react'

import { Center, Divider, Flex, Heading, Text, Stack } from 'native-base'

const Attributes = (props: any) => {

  const items = props.data.map((element: any, index: any, array: any) => (
    <>
      <Center flex={1}>
        <Stack space={1} alignItems="center">
        <Heading size="xs" py="2">{element.label}</Heading>
        <Text>{element.value}</Text>
        </Stack>
      </Center>
      {(index !== (array.length - 1)) && <Divider orientation="vertical" mx="3" />}
    </>
  ))

  return (
    <Flex mx="3" direction="row" justify="space-evenly">
      {items}
    </Flex> 
  )
}

export default Attributes
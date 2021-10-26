import React from 'react'

import { Box } from 'native-base'
import { TabRouter } from '@react-navigation/routers'

const renderHeading = (data: any) => {
  switch(data) {
    case 'Feed':
      return
    case 'list':
      return
    case 'item':
      return
    case 'form':
      return
  }
}

const Heading = (props: any) => (
  <Box>
    {props.route.name}
  </Box>
)

export default Heading

/**
 * Get the components based on the screen type
 * array of props in order, for each item in array > render
*/
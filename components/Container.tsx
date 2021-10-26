import * as React from 'react'

import { Box, StatusBar, Text } from 'native-base'

const Container = (props) => (
  <Box flex={1} p="5">
    <StatusBar />
    {/* Headings & Description */}
    <Box></Box>
    {/* Filters */}
    <Box></Box>
    
    <Text>Disiplay text</Text>
  </Box>
)

export default Container

/**
 * Status Bar
 * Navigation & auth actions
 * Headings & Description
 * Filters
 * Content
 */
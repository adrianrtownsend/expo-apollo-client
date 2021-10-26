import * as React from 'react'

import { Box } from 'native-base'

const Content = (props, { children }) => (
  <Box flex={props.flex}>
    {children}
  </Box>
)

export default Content

/**
 * Status Bar
 * Navigation & auth actions
 * Headings & Description
 * Filters
 * Content
 */
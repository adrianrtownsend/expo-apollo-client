import * as React from 'react'

import { Box } from 'native-base'

const Content = (props: any) => (
  <Box flex={props.flex}>
    {props.children}
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
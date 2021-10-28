import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { Box, Button, FormControl, HStack, Input, Link, StatusBar, Text, VStack } from 'native-base'

import Content from '../components/Content'
import Heading from '../components/Heading'

const FormScreen = ({ route }: any) => {

  /**
   * Expected Content:
   * Img Avatars
   * Textboxes -> needs to have validation functionality set up. should be allowed on any field and always expects defaults & optional props
   * Select Dropdowns
   * Toggle Badges
   * Plain text
   * Buttons
   * 
   * ==================
   * Iterate through each item passed to page.
   * - Heading: passed from route
   * 
   * - Input and options should be passed from layout/context
   * -- Can use a layout context file to hold layout configs for each page!!!! Like a json layout for each maybe...or just something so the components are dynamically generated based off the buttons set
   *   - Theme should automatically take care of layout
   *   - Navigation passes in ordered list layout for each item, and the associated metadata (validation to use, actions to set/call for each element)
  */

  /**
   * Sign Up
   * header
   * 
   *  
  */

  const signUp = (
    <Content flex={4}>
      <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Email
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Password
            </FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Confirm Password
            </FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" _text={{ color: 'white' }}>
            Sign up
          </Button>
        </VStack>
    </Content>
  )

  const signIn = (
    <Content flex={4}>
      <FormControl>
        <FormControl.Label
          _text={{
            color: 'coolGray.800',
            fontSize: 'xs',
            fontWeight: 500,
          }}>
          Email ID
        </FormControl.Label>
        <Input />
      </FormControl>
      <FormControl>
        <FormControl.Label
          _text={{
            color: 'coolGray.800',
            fontSize: 'xs',
            fontWeight: 500,
          }}>
          Password
        </FormControl.Label>
        <Input type="password" />
        <Link
          _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }}
          alignSelf="flex-end"
          mt="1">
          Forget Password?
        </Link>
      </FormControl>
        <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="muted.700" fontWeight={400}>
            I'm a new user.{' '}
          </Text>
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            href="#">
            Sign Up
          </Link>
        </HStack>
    </Content>
  )

  return (
    <Box flex={1} p="5">
      {/* Status Bar */}
      <StatusBar />

      {/* Heading */}
      <Heading route={route}>
        {/* Header */}
        {/* Child header or small.description */} 
      </Heading>
      {/* Form Content */}
        {/* Input box/editable items in whichever given theme layout. Goal is to have simple setup where theme takes care of need for styles and classNames. Basic default setup for now. design as method to load in content*/}
        {signUp}
    </Box>
  )

}



export default FormScreen

/**
 * Places used for form screen
 * - Profile Edit
 * - Create Class
 * - Edit Class
 * - Create Assignment
 * - Edit Assignment
 * - Sign Up
 * - Sign In
 *  
 * -----------------
 * [Default]
 * < box
 *  < statusBar
 *  < Heading - is whole section
 *  - should route specific layout styling applied so it knows how to render
 *  - // should be based off theme!
 * 
 *  <Input boxes with labels/placeholders/all styling etc (validation, alert, success) />
 * 
 *  <Helpers (prompt messages) with any tip or extra action
 * 
 *  <Action buttons ([submit], [cancel], [redirect])
 *
 * 
 * [Profile Screen]
 * < box
 *  < statusBar
 *  < Heading - is whole section
 *  - should route specific layout styling applied so it knows how to render
 *  - // should be based off theme!
 * 
 *  <Input boxes with labels/placeholders/all styling etc />
 * 
 *  <Helpers (toggle sign-in/up screen, forgot password)
 * 
 *  <Action buttons (sign-in/up, login with google)
 *  - Google oauth make sure text says sign-in/up correctly per route
 * 
*/

/**
 * page url tells which params to grab
 * - so need to store layout params with react navigation
 * - layout/component is based off data & attribute type being received
 *  > ex: image = profile icon, name = string, status = badge?
 *  > slider for grade? (make textbox then slider later when done right)
*/
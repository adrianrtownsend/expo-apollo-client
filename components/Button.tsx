// Defaults
import React, { useContext } from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons'

// Components
import { AppContext } from '../AppContext'

// Styling
import { Button as NbButton, Icon } from 'native-base'

export const Button = (props: any) => {

  const app = useContext(AppContext)
  
  const buttonType = {
    'type': {
      'create': {
        'icon': {
          'source': Ionicons,
          'name': 'create-outline',
        },
        'color': 'tertiary',
      },
      'save': {
        'icon': {
          'source': AntDesign,
          'name': 'check',
        },
        'color': 'primary',
      },
      'cancel': {
        'icon': {
          'source': AntDesign,
          'name': 'close',
        },
        'color': 'secondary'
      }
    }
  }

  return (
    <NbButton
      startIcon={props.startIcon && <Icon as={props.buttonType['type'][props.type]['source']} name={buttonType['type'][props.type]['name']} />}
      endIcon={props.endIcon && <Icon as={props.buttonType['type'][props.type]['source']} name={buttonType['type'][props.type]['name']} />}
      onPress={() => app.dispatchContext[props.onPress]()}
      size={props.size ? props.size : 'md'}
      isDisabled={props.isDisabled ? true : false}
      colorScheme={buttonType['type'][props.type]['color']}
    >
      {props.label}
    </NbButton>
  )
}
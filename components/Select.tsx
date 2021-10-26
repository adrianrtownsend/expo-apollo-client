// Defaults
import React, { useState } from 'react'

// Styling
import { Select as NbSelect, CheckIcon } from 'native-base'

const Select = (props) => {

  const [item, setItem] = useState('0')

  const items = props.data.map((element, index) => (
    <NbSelect.Item key={index} label={element.label} value={`${index}`} />
  ))

  return (
    <NbSelect
      selectedValue={item}
      _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />,
      }}
      mt={1}
      onValueChange={(itemValue) => setItem(itemValue)}
    >{items}</NbSelect>
  )
}

export default Select
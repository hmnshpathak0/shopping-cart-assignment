import React from 'react'
import { createField, fieldPresets } from 'react-advanced-form'

const Input = ({ fieldState, fieldProps }) => {
  const { valid, invalid } = fieldState

  const classNames = [valid && 'has-success', invalid && 'has-error'].filter(
    Boolean,
  )

  return <input {...fieldProps} className={classNames.join(' ')} />
}

export default createField(fieldPresets.input)(Input)
import React from 'react'
import { SketchPiker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

function ColorPicker() {
  const snap = useSnapshot(state);

  return (
    <div
      className='absolute left-full ml-3'
    >
      <SketchPiker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        presetColors={[ '#336699', '#86BBD8', 'e76f51', '023047', 'fb8500']}
      />

    </div>
  )
}

export default ColorPicker
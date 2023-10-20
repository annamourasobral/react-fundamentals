// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const s = 'small box'
const m = 'medium box'
const l = 'large box'
const small = 'box box--small'
const medium = 'box box--medium'
const large = 'box box--large'
const lightBlue = {backgroundColor: 'lightblue', fontStyle: ' italic'}
const pink = {backgroundColor: 'pink', fontStyle: ' italic'}
const orange = {backgroundColor: 'orange', fontStyle: ' italic'}

function App() {
  return (
    <div>
      <Box text={s} size={small} color={lightBlue} />
      <Box text={m} size={medium} color={pink} />
      <Box text={l} size={large} color={orange} />
    </div>
  )
}

export default App

function Box({text, size, color}) {
  return (
    <div className={size} style={color}>
      {text}
    </div>
  )
}

import React from "react"
import { configure, addDecorator, addParameters } from '@storybook/react'
import theme from './theme'

// import 'babel-polyfill'

// Load all files in the stories folder with a .js extension
const req = require.context('../stories/', true, /.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    theme: theme,
    isFullscreen: false,
    panelPosition: 'right',
  }
})

addDecorator(story => <div style={{ padding: 20 }}>{story()}</div>)

configure(loadStories, module)
import * as React from 'react'
import ClassNames from 'classnames'
import { TabsProps } from './interface'
import Tab from './tab'

import './style/index.scss'

const noop = () => {}

const defaultProps: TabsProps = {
  onChange: noop,
  type: 'line',
  size: 'normal',
  tabPosition: 'top'
}

const Tabs: React.SFC<TabsProps> & { defaultProps: Partial<TabsProps> } = props => {
  return null
}

Tabs.defaultProps = defaultProps

export default Tabs

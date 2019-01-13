import * as React from 'react'
import ClassNames from 'classnames'
import { TabProps } from './interface'

const prefixCls = 'uni-tab'

const Tab: React.SFC<TabProps> = props => {
  // const { key, tab } = props
  const classStr = ClassNames(`${prefixCls}-content-item`, {})
  return <div className={classStr}>{props.children}</div>
}

export default Tab

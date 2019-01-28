import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { InstanceProps } from './interface'
import { getUidString } from '../utils'
// import Toast from './toast'

const { useState, useEffect } = React
const noop = () => {}

const defaultProps: InstanceProps = {
  size: 'normal',
  shape: 'filled',
  duration: 3000,
  onClick: noop,
  onClose: noop
}

const addMessage = (props: InstanceProps) => {
  const id = getUidString()
}

const Message: React.FC<InstanceProps> & { defaultProps: Partial<InstanceProps> } = props => {
  const { children } = props
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (!children) {
      setVisible(false)
    }
    return () => {}
  })
  return <div className="uni-message-group" />
}

Message.defaultProps = defaultProps

export default Message

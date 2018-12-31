import * as React from 'react'
import ClassNames from 'classnames'
import { InputProps } from './interface'

const noop = () => {}
const prefixCls = 'uni-input'

const defaultProps: InputProps = {
  type: 'text',
  disabled: false,
  autoFocus: false,
  clear: false,
  onChange: noop,
  onBlur: noop,
  onFocus: noop
}

const getClassName = ({ disabled, className }: InputProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled
  })
}

const Input: React.SFC<InputProps> & { defaultProps: Partial<InputProps> } = props => {
  return <div className={getClassName(props)} />
}

Input.defaultProps = defaultProps

export default Input

import * as React from 'react'
import ClassNames from 'classnames'
import Icon from '../icon'
import { InputProps } from './interface'

const { useRef, useEffect } = React

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

const normalizeValue = (value?: string) => {
  if (typeof value === 'undefined' || value === null) {
    return ''
  }
  return value
}

const getClassName = ({ disabled, className }: InputProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled
  })
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, { onChange }: InputProps) => {
  const value = e.target.value
  const newValue = normalizeValue(value)
  onChange(newValue)
}

const handleBlur = (
  value: string,
  e: React.FocusEvent<HTMLInputElement>,
  { onBlur }: InputProps
) => {
  onBlur(value, e)
}

const renderPrefix = ({ prefix }: InputProps) => {
  if (prefix) {
    return <div className={`${prefixCls}-prefix`}>{prefix}</div>
  }
  return null
}

const renderSuffix = ({ suffix }: InputProps) => {
  if (suffix) {
    return <div className={`${prefixCls}-suffix`}>{suffix}</div>
  }
  return null
}

const renderClearIcon = ({ disabled, value, defaultValue, clear }: InputProps) => {
  const newValue = normalizeValue(value || defaultValue)
  if (!disabled && newValue && newValue.length && clear) {
    return (
      <div>
        <Icon type="close-circle" />
      </div>
    )
  }
  return null
}

const Input: React.SFC<InputProps> & { defaultProps: Partial<InputProps> } = props => {
  const inputRef = useRef(null)
  const value = normalizeValue(props.value || props.defaultValue)
  const { autoFocus } = props
  useEffect(
    () => {
      inputRef && autoFocus && (inputRef.current as any).focus()
      return () => {}
    },
    [inputRef]
  )
  return (
    <div className={getClassName(props)}>
      <div className={`${prefixCls}-container`}>
        {renderPrefix(props)}
        <div className={`${prefixCls}-input`}>
          <input
            ref={inputRef}
            value={value}
            onChange={e => handleChange(e, props)}
            onBlur={e => handleBlur(value, e, props)}
          />
          {renderClearIcon(props)}
        </div>
        {renderSuffix(props)}
      </div>
    </div>
  )
}

Input.defaultProps = defaultProps

export default Input

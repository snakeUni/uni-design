import * as React from 'react'
import ClassNames from 'classnames'
import { ButtonProps } from './interface'

const noop = () => {}

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)
function isString(str: any) {
  return typeof str === 'string'
}

// Insert one space between two chinese characters automatically.
function insertSpace(child: any) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(' '))
  }
  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ')
    }
    return <span>{child}</span>
  }
  return child
}

const defaultProps: ButtonProps = {
  disabled: false,
  loading: false,
  onClick: noop,
  size: 'normal',
  prefixCls: 'ui-btn'
}

const getClassName = ({ className, loading, disabled, type, size, prefixCls }: ButtonProps) => {
  const classStr = ClassNames(prefixCls, className, {
    [`${prefixCls}-warning`]: type === 'warning',
    [`${prefixCls}-primary`]: type === 'primary',
    [`${prefixCls}-ghost`]: type === 'ghost',
    [`${prefixCls}-large`]: size === 'large',
    [`${prefixCls}-normal`]: size === 'normal',
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-disabled`]: disabled
  })
  return classStr
}

const handleClick = (
  e: React.MouseEvent<HTMLButtonElement>,
  { onClick, disabled }: ButtonProps
) => {
  if (disabled) return
  onClick(e)
}

const renderLoading = ({ loading }: ButtonProps) => {
  if (loading) {
    return <div>loading...</div>
  }
  return null
}

const renderIcon = ({ icon }: ButtonProps) => {
  if (icon) {
    return <div>icon</div>
  }
  return null
}

const renderChildren = ({ children }: any) => {
  return React.Children.map(children, insertSpace)
}

const Button = (props: ButtonProps) => {
  const { style, htmlType } = props
  return (
    <div className={getClassName(props)} style={style}>
      <button onClick={e => handleClick(e, props)} type={htmlType}>
        {renderLoading(props)}
        {renderIcon(props)}
        {renderChildren(props)}
      </button>
    </div>
  )
}

Button.defaultProps = defaultProps

export default Button

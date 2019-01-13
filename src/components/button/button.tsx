import * as React from 'react'
import ClassNames from 'classnames'
import Icon from '../icon'
import { ButtonProps } from './interface'
import './style/index.scss'

const noop = () => {}

const defaultProps: ButtonProps = {
  disabled: false,
  loading: false,
  onClick: noop,
  size: 'normal',
  prefixCls: 'uni-btn',
  type: 'primary'
}

const getClassName = ({ className, loading, disabled, type, size, prefixCls }: ButtonProps) => {
  const classStr = ClassNames(prefixCls, className, {
    [`${prefixCls}-warning`]: type === 'warning',
    [`${prefixCls}-primary`]: type === 'primary',
    [`${prefixCls}-ghost`]: type === 'ghost',
    [`${prefixCls}-large`]: size === 'large',
    [`${prefixCls}-normal`]: size === 'normal',
    [`${prefixCls}-small`]: size === 'small',
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
    return <Icon type="reload" />
  }
  return null
}

const renderIcon = ({ icon }: ButtonProps) => {
  if (icon) {
    return <React.Fragment>{icon}</React.Fragment>
  }
  return null
}

// 解决ts 写了defaultProps  使用仍然需要必填的问题
const Button: React.SFC<ButtonProps> & { defaultProps: Partial<ButtonProps> } = props => {
  const { style, htmlType, disabled, prefixCls, children } = props
  return (
    <div className={`${prefixCls}-button_btn`}>
      <button
        onClick={e => handleClick(e, props)}
        type={htmlType}
        className={getClassName(props)}
        style={style}
        disabled={disabled}
      >
        {renderLoading(props)}
        {renderIcon(props)}
        <span>{children}</span>
      </button>
    </div>
  )
}

Button.defaultProps = defaultProps

export default Button

import * as React from 'react'
import ClassNames from 'classnames'
import './style/index.scss'

const noop = () => {}

interface IconProps {
  size: string | number
  type?: string
  prefixCls: string
  className?: string
  color?: string
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const defaultProps: IconProps = {
  size: 24,
  prefixCls: 'uni-icon',
  onClick: noop
}

const handleClick = (e: React.MouseEvent<HTMLElement>, { onClick }: IconProps) => {
  onClick(e)
}

const Icon = (props: IconProps) => {
  const { prefixCls, type, size, color } = props
  const classStr = ClassNames(prefixCls, `${prefixCls}-${type}`)
  const style = {
    fontSize: size,
    color
  }
  return <i className={classStr} style={style} onClick={e => handleClick(e, props)} />
}

Icon.defaultProps = defaultProps

export default Icon

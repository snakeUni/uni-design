import * as React from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './interface'
import Context from './context'

const defaultProps: MenuItemProps = {
  disabled: false
}

const prefixCls = 'uni-menu-item'

const getClassName = (selectedKey: string[], key: string) => {
  return classNames(prefixCls, {
    [`${prefixCls}-selected`]: selectedKey.includes(key)
  })
}

const MenuItem: React.SFC<MenuItemProps> & { defaultProps: Partial<MenuItemProps> } = props => {
  const { key } = props
  const { selectedKeys, onClick, onSelect } = React.useContext(Context)
  const classStr = getClassName(selectedKeys, key as string)

  const handleClick = () => {
    if (!selectedKeys.includes(key as string)) {
      const cloneSelectedKeys = selectedKeys.slice()
      cloneSelectedKeys.includes(key as string)
        ? cloneSelectedKeys
        : cloneSelectedKeys.push(key as string)
      onSelect(key as string, cloneSelectedKeys)
    }
    onClick(key as string)
  }

  return (
    <React.Fragment>
      <li className={classStr} onClick={handleClick}>
        {props.children}
      </li>
    </React.Fragment>
  )
}

MenuItem.defaultProps = defaultProps

export default MenuItem

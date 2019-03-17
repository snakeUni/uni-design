import * as React from 'react'
import classNames from 'classnames'
import { SubMenuProps } from './interface'
import Icon from '../icon'
import context from './context'

const noop = () => {}
const prefixCls = 'uni-menu-submenu'

const defaultProps: SubMenuProps = {
  disabled: false,
  onTitleClick: noop
}

const getCloneOpenKeys = (openKeys: string[], expanded: boolean, subKey: string) => {
  const cloneOpenKeys = openKeys.slice()
  const isInclude = cloneOpenKeys.includes(subKey)
  if (expanded) {
    isInclude ? cloneOpenKeys : cloneOpenKeys.push(subKey)
  } else {
    isInclude ? cloneOpenKeys.splice(cloneOpenKeys.indexOf(subKey), 1) : cloneOpenKeys
  }
  return cloneOpenKeys
}

const SubMenu: React.SFC<SubMenuProps> & { defaultProps: Partial<SubMenuProps> } = props => {
  const { title, children, key, onTitleClick } = props
  const { openKeys, onOpenChange } = React.useContext(context)
  // openKey 初始化状态
  const [expanded, setExpanded] = React.useState(openKeys.includes(key as string))

  const handleClick = () => {
    const cloneOpenKeys = getCloneOpenKeys(openKeys, !expanded, key as string)
    onOpenChange(cloneOpenKeys)
    onTitleClick(key as string)
    setExpanded(!expanded)
  }

  const classStr = classNames(`${prefixCls}-list`, {
    [`${prefixCls}-hidden`]: !expanded
  })

  return (
    <React.Fragment>
      <li className={prefixCls}>
        <div className={`${prefixCls}-title`} onClick={handleClick}>
          <span>{title}</span>
          <Icon type={expanded ? 'up' : 'down'} />
        </div>
        <ul className={classStr}>{children}</ul>
      </li>
    </React.Fragment>
  )
}

SubMenu.defaultProps = defaultProps

export default SubMenu

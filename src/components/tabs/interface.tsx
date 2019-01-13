import * as React from 'react'
/**
 * tab
 */
export interface TabProps {
  // 每一个key 对应 activeKey
  key?: string
  // tab的内容
  tab?: string | React.ReactNode
}

export type TabsTypes = 'card' | 'line'

export type TabsSizeTypes = 'small' | 'normal' | 'large'

export type TabsPositionTypes = 'top' | 'bottom' | 'left' | 'right'

/**
 * Tabs 群组
 */
export interface TabsProps {
  // 当前激活 tab 面板的 key
  activeKey?: string
  // type 类型 默认为line
  type: TabsTypes
  // onChange 切换tab的回调
  onChange: (value: string) => void
  // defaultActiveKey 初始化选中面板的 key，如果没有设置 activeKey
  defaultActiveKey?: string
  // size 大小 默认为normal
  size: TabsSizeTypes
  // tab bar 上额外的元素 可以显示在最右边
  tabBarExtraContent?: React.ReactNode
  // tabBarGutter tabs 之间的间隙
  tabBarGutter?: number
  // className
  className?: string
  // tabPosition 标签位置 默认为top
  tabPosition: TabsPositionTypes
}

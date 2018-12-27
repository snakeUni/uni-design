import * as React from 'react'

type buttonType = 'warning' | 'primary' | 'ghost'
type sizeType = 'large' | 'normal'
export interface ButtonProps {
  // button的类型
  type?: buttonType
  // button的尺寸，默认normal
  size: sizeType
  // disabled 默认为false
  disabled: boolean
  // 按钮的loading态 默认为false
  loading: boolean
  // onClick
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  // 前缀
  prefixCls: string
  // 类名
  className?: string
  // style
  style?: object
  // icon
  icon?: React.ReactNode
  // htmlType 原生的type  比如submit这些
  htmlType?: string
}

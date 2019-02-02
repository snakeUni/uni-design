import * as React from 'react'

export type TriggerType = 'click' | 'hover'

export type AnimateType = 'fade' | 'scrollX'

export interface CarouselProps {
  // 是否自动播放无限循环 默认为false
  autoPlay: boolean
  // dots 是否显示面板的指示点 默认为true
  showDots: boolean
  // dots 指示点可以自由配置指示的样式
  dot?: React.ReactNode
  // onChange 轮播图切换的回调函数,index从1开始
  onChange: (index: number) => void
  // 动画方式 目前提供两个`fade`, `scrollX`, 默认`scrollX`
  animate: AnimateType
  // duration 时间 默认为3000ms
  duration: number
  // arrows 是否显示箭头 默认为true
  arrows: boolean
  // leftArrow 自定义左边箭头
  preArrow?: React.ReactNode
  // rightArrow 自定义右边箭头
  nextArrow?: React.ReactNode
  // children
  children?: React.ReactNode
  // centerMode 是否开启居中模式突出中间的 默认为false
  centerMode: boolean
  // current 初始化的时候显示第几个默认为0
  activeIndex: number
}

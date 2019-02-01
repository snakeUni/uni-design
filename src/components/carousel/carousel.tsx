import * as React from 'react'
import ClassNames from 'classnames'
import { CarouselProps } from './interface'

import './style/index.scss'

interface ChildProps {
  props: CarouselProps
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  wrapperRef?: React.RefObject<HTMLDivElement>
}

interface ClickProps {
  index: number
  onChange: (index: number) => void
  setCurrent: React.Dispatch<React.SetStateAction<number>>
}

interface StyleProps {
  current: number
  length: number
  wrapperRef: React.RefObject<HTMLDivElement>
}

const { useState, useEffect, useRef } = React

const noop = () => {}
const prefixCls = 'uni-carousel'

const defaultProps: CarouselProps = {
  autoPlay: false,
  showDots: true,
  onChange: noop,
  animate: 'scrollX',
  duration: 3000,
  arrows: true,
  centerMode: false
}

const getClassNames = ({ autoPlay, showDots, arrows, centerMode }: CarouselProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-autoplay`]: autoPlay,
    [`${prefixCls}-dot`]: showDots,
    [`${prefixCls}-arrows`]: arrows,
    [`${prefixCls}-center-mode`]: centerMode
  })
}

const getChildren = ({ children }: CarouselProps) => {
  if (children) {
    return React.Children.toArray(children)
  }
  return null
}

const getPreIndex = (length: number, current: number) => {
  if (current === 0) return length - 1
  return current - 1
}

const getNextIndex = (length: number, current: number) => {
  if (current === length - 1) return 0
  return current + 1
}

const getSlideItemClass = (current: number, index: number) => {
  return ClassNames(`${prefixCls}-slide-item`, {
    [`${prefixCls}-slide-item-active`]: current === index
  })
}

const getStyle = ({ current, wrapperRef }: StyleProps) => {
  let style: React.CSSProperties = {}
  if (wrapperRef) {
    const width: any = wrapperRef.current && wrapperRef.current.offsetWidth
    style = {
      opacity: 1,
      transform: `translate3d(-${(current + 1) * width}px, 0px, 0px)`
    }
  }
  return style
}

const getAriaHidden = (current: number, index: number) => {
  return current === index ? false : true
}

const clearTime = (timeOut: NodeJS.Timeout) => {
  if (timeOut) {
    clearInterval(timeOut)
  }
}

const setValue = ({ index, onChange, setCurrent }: ClickProps) => {
  setCurrent(index)
  onChange(index)
}

const handlePre = ({ props, current, setCurrent }: ChildProps) => {
  const { onChange } = props
  const childArray = getChildren(props)
  if (childArray && childArray.length > 0) {
    const preIndex = getPreIndex(childArray.length, current)
    setValue({ index: preIndex, onChange, setCurrent })
  }
}

const handleNext = ({ props, current, setCurrent }: ChildProps) => {
  const { onChange } = props
  const childArray = getChildren(props)
  if (childArray && childArray.length > 0) {
    const nextIndex = getNextIndex(childArray.length, current)
    setValue({ index: nextIndex, onChange, setCurrent })
  }
}

const renderChildren = ({ props, current }: ChildProps) => {
  const childrenMap = getChildren(props)
  const wrapperRef = useRef(null)
  if (childrenMap) {
    const length = childrenMap.length
    const trackStyle = getStyle({ current, length, wrapperRef })
    return (
      <div className={`${prefixCls}-slide-list`}>
        <div className={`${prefixCls}-slide-track`} style={trackStyle} ref={wrapperRef}>
          <div
            className={getSlideItemClass(current, length - 1)}
            tabIndex={-1}
            data-index={-1}
            aria-hidden={getAriaHidden(current, length - 1)}
          >
            {childrenMap[length - 1]}
          </div>
          {childrenMap.map((child, index) => {
            const classStr = getSlideItemClass(current, index)
            return (
              <div
                className={classStr}
                key={index}
                tabIndex={-1}
                data-index={index}
                aria-hidden={getAriaHidden(current, index)}
              >
                {child}
              </div>
            )
          })}
          <div
            className={getSlideItemClass(current, 0)}
            tabIndex={-1}
            data-index={length}
            aria-hidden={getAriaHidden(current, 0)}
          >
            {childrenMap[0]}
          </div>
        </div>
      </div>
    )
  }
  return null
}

const renderDot = ({ props, current, setCurrent }: ChildProps) => {
  const { showDots, dot, onChange } = props
  const childrenMap = getChildren(props)
  const dotClone = dot || null
  const classStr = ClassNames(`${prefixCls}-dots`, {
    [`${prefixCls}-dots-default`]: dot
  })
  if (showDots && childrenMap) {
    return (
      <ul className={classStr}>
        {childrenMap.map((_child, index) => {
          const liStr = ClassNames(`${prefixCls}-dot-item`, {
            [`${prefixCls}-dot-active`]: current === index
          })
          return (
            <li
              className={liStr}
              key={`${index}-dot`}
              onClick={() => setValue({ index, onChange, setCurrent })}
            >
              {dotClone}
            </li>
          )
        })}
      </ul>
    )
  }
  return null
}

const renderArrow = ({ props, current, setCurrent }: ChildProps) => {
  const { arrows, preArrow, nextArrow } = props
  if (arrows) {
    return (
      <div className={`${prefixCls}-arrows`}>
        {preArrow ? (
          <div
            className={`${prefixCls}-pre-arrow`}
            onClick={() => handlePre({ props, current, setCurrent })}
          >
            {preArrow || null}
          </div>
        ) : null}
        {nextArrow ? (
          <div
            className={`${prefixCls}-pre-arrow`}
            onClick={() => handleNext({ props, current, setCurrent })}
          >
            {nextArrow || null}
          </div>
        ) : null}
      </div>
    )
  }
  return null
}

const Carousel: React.FC<CarouselProps> & { defaultProps: Partial<CarouselProps> } = props => {
  const { children, duration, autoPlay, onChange, animate } = props
  const [current, setCurrent] = useState(0)
  const classStr = getClassNames(props)
  const animateNameStr = ClassNames(`${prefixCls}-slide`, {
    [`${prefixCls}-${animate}`]: animate
  })
  const length = React.Children.count(children)
  // didupdate and didmount都需要调用
  useEffect(() => {
    let timeOut: any
    if (autoPlay) {
      timeOut = setInterval(() => {
        const currentIndex = current === length - 1 ? 0 : current + 1
        setCurrent(currentIndex)
        onChange(currentIndex)
      }, duration)
    }
    return () => {
      clearTime(timeOut)
    }
  })
  useEffect(
    () => {
      setCurrent(0)
      return () => {}
    },
    [setCurrent]
  )
  return (
    <div className={classStr}>
      <div className={animateNameStr}>
        {renderChildren({ props, current, setCurrent })}
        {renderDot({ props, current, setCurrent })}
        {renderArrow({ props, current, setCurrent })}
      </div>
    </div>
  )
}

Carousel.defaultProps = defaultProps

export default Carousel

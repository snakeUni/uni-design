import * as React from 'react'
import ClassNames from 'classnames'
import { SlideProps } from './interface'

import './style/index.scss'

const noop = () => {}
const prefixCls = 'uni-slide'

const defaultProps: SlideProps = {
  range: false,
  value: 0,
  onChange: noop,
  disabled: false,
  min: 0,
  max: 100,
  direction: 'horizontal',
  step: 1,
  tooltipVisible: false
}

const getClassNames = ({ range, disabled, direction, tooltipVisible }: SlideProps) => {
  return ClassNames(prefixCls, {
    [`${prefixCls}-range`]: range,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-${direction}`]: direction,
    [`${prefixCls}-tooltip`]: tooltipVisible
  })
}

const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, {  }: SlideProps) => {
  // console.log('mouseDown', e.pageX, e.pageY)
}

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, {  }: SlideProps) => {
  // console.log('mouseMove', e.pageX, e.pageY)
}

const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>, {  }: SlideProps) => {
  // console.log('mouseUp', e.pageX, e.pageY)
}

const Slide: React.FC<SlideProps> & { defaultProps: Partial<SlideProps> } = props => {
  const { range, marks, value } = props
  const classStr = getClassNames(props)
  const handleStyle: React.CSSProperties = range ? { left: `${value[0]}%` } : { left: `${value}%` }
  const handle2Style: React.CSSProperties = range ? { left: `${value[1]}&` } : {}
  const trackStyle: React.CSSProperties = range
    ? { left: `${value[0]}%`, width: `${value[1] - value[0]}&` }
    : { left: '0%', width: `${value}%` }
  return (
    <div className={classStr}>
      <div className={`${prefixCls}-rail`} />
      <div className={`${prefixCls}-track`} style={trackStyle} />
      <div
        className={`${prefixCls}-handle`}
        onMouseDown={e => handleMouseDown(e, props)}
        onMouseMove={e => handleMouseMove(e, props)}
        onMouseUp={e => handleMouseUp(e, props)}
        style={handleStyle}
      />
      {range ? (
        <div
          className={`${prefixCls}-handle2`}
          onMouseDown={e => handleMouseDown(e, props)}
          onMouseMove={e => handleMouseMove(e, props)}
          onMouseUp={e => handleMouseUp(e, props)}
          style={handle2Style}
        />
      ) : null}
      {marks ? <div className={`${prefixCls}-marks`} /> : null}
    </div>
  )
}

Slide.defaultProps = defaultProps

export default Slide

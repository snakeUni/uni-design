import * as React from 'react'
import { createPortal } from 'react-dom'
import { OverlayProps } from './interface'
import Overlay from './overlay'

const noop = () => {}
const { useState } = React

const defaultProps: OverlayProps = {
  prefixCls: 'uni-overlay',
  visible: false,
  mask: true,
  maskClosable: true,
  closable: false,
  autoFix: false,
  destroy: true,
  onClose: noop,
  maskAnimationName: 'fade',
  animationName: 'fade'
}

const OverlayWrapper: React.SFC<OverlayProps> & { defaultProps: Partial<OverlayProps> } = props => {
  const [firstTime, setFirstTime] = useState(true)
  const { visible, destroy } = props
  if (visible) {
    if (firstTime) {
      setFirstTime(false)
    }
  }

  if (destroy) {
    if (visible) {
      return createPortal(
        <div>
          <Overlay {...props} />
        </div>,
        document.body
      )
    }
    return null
  } else {
    let style: React.CSSProperties = {}
    style = visible ? {} : { display: 'none' }
    return visible || !firstTime
      ? createPortal(
          <div style={style}>
            <Overlay {...props} />
          </div>,
          document.body
        )
      : null
  }
}

OverlayWrapper.defaultProps = defaultProps

export default OverlayWrapper

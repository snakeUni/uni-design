import * as React from 'react'
import ClassNames from 'classnames'
import Radio from './radio'
import { RadioGroupProps, func } from './interface'

const noop = () => {}

const defaultProps: RadioGroupProps = {
  options: [],
  disabled: false,
  onChange: noop
}

const prefixCls = 'uni-radio-group'

const getClassNames = ({ disabled, className }: RadioGroupProps) => {
  return ClassNames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled
  })
}

const handleChange = (value: any, onChange: func) => {
  onChange(value)
}

const renderOptions = ({ options, value, onChange }: RadioGroupProps) => {
  if (options && options.length > 0) {
    return (
      <React.Fragment>
        {options.map(option => {
          const optionValue = option.value
          return (
            <Radio
              checked={optionValue === value}
              onChange={() => handleChange(optionValue, onChange)}
              key={`${optionValue}-radio`}
              disabled={option.disabled}
            >
              {option.label}
            </Radio>
          )
        })}
      </React.Fragment>
    )
  }
  return null
}

const RadioGroup: React.SFC<RadioGroupProps> & {
  defaultProps: Partial<RadioGroupProps>
} = props => {
  const classStr = getClassNames(props)
  return <div className={classStr}>{renderOptions(props)}</div>
}

RadioGroup.defaultProps = defaultProps

export default RadioGroup

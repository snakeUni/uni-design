import  React from "react";
import { storiesOf } from "@storybook/react";
import Input from '../src/components/input'
import Upload from '../src/components/upload'
import { Checkbox, CheckboxGroup } from '../src/components/checkbox'
import { Radio, RadioGroup } from '../src/components/radio'


class InputDemo extends React.Component {
  state = {
    value: ''
  }
  handleChange = value => {
    console.log(value)
    this.setState({ value })
  }
  render() {
    return (
      <div>
        <div><Input onChange={this.handleChange} value={this.state.value}/></div>
        <div style={{marginTop: 10}}><Input onChange={this.handleChange} value={this.state.value} prefix="满" suffix="元"/></div>
        <div style={{marginTop: 10}}>
          <Input onChange={this.handleChange} value={this.state.value} prefix="满" suffix="元" addonBefore={<div>http://</div>} addonAfter={<div>com</div>}/>
        </div>
        <div style={{marginTop: 10}}>
          <Input onChange={this.handleChange} value={this.state.value} prefix="满" suffix="元" addonBefore={<div>http://</div>} placeholder="这是placeholder"/>
        </div>
        <div style={{marginTop: 10}}>
          <Input onChange={this.handleChange} value={this.state.value} prefix="满" suffix="元" addonAfter={<div>http://</div>} />
        </div>
        <div style={{marginTop: 10}}>显示clear</div>
        <div><Input onChange={this.handleChange} value={this.state.value} clear/></div>
        <div style={{marginTop: 10}}>password</div>
        <div><Input onChange={this.handleChange} value={this.state.value} type="password"/></div>
        <div style={{marginTop: 10}}>手机号</div>
        <div><Input onChange={this.handleChange} value={this.state.value} type="mobile"/></div>
        <div style={{marginTop: 10}}>银行卡</div>
        <div><Input onChange={this.handleChange} value={this.state.value} type="bankCard"/></div>
        <div style={{marginTop: 10}}>数字</div>
        <div><Input onChange={this.handleChange} value={this.state.value} type="number"/></div>
      </div>
    )
  }
}

class UploadDemo extends React.Component {
  state = {
    files: []
  }
  handleChange = files => {
    console.log(files)
    this.setState({ files })
  }
  render() {
    return (
      <div>
        <Upload fileList={this.state.files} onChange={this.handleChange} preview/>
        <div style={{ marginTop: 20 }}>
          <Upload fileList={this.state.files} onChange={this.handleChange} type="card" preview/>
        </div>
        <div style={{ marginTop: 20 }}>
          <Upload fileList={this.state.files} onChange={this.handleChange} type="card" preview multiple/>
        </div>
      </div>
    )
  }
}

class CheckboxDemo extends React.Component {
  state = {
    checked: false,
    checked1: true,
    value: []
  }

  options = [{
    label: '红色',
    value: 1
  },{
    label: '蓝色',
    value: 2
  }, {
    label: '绿色',
    value: 3
  }]

  handleChange = checked => {
    console.log('checked', checked)
    this.setState({ checked })
  }

  handleChange1 = checked1 => {
    console.log('checked', checked1)
    this.setState({ checked1 })
  }

  handleChange3 = (value) => {
    console.log(value)
    this.setState({ value })
  }

  handleChange4 = checked => {
    if (checked) {
      this.setState({ value: [1, 2, 3] })
    } else {
      this.setState({ value: [] })
    }
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <Checkbox onChange={this.handleChange} checked={this.state.checked}>
          checkbox
        </Checkbox>
        <Checkbox onChange={this.handleChange1} checked={this.state.checked1}>
          checkbox
        </Checkbox>
        <div style={{ marginTop: 20 }}>
          <CheckboxGroup options={this.options} onChange={this.handleChange3} value={this.state.value}/>
        </div>
        <div style={{ marginTop: 20 }}>
          <Checkbox onChange={this.handleChange} checked={this.state.checked} indeterminate>半选</Checkbox>
        </div>
        <p>群组</p>
        <div style={{ marginTop: 20 }}>
          <Checkbox onChange={this.handleChange4} checked={this.state.value.length === this.options.length} indeterminate={value.length < this.options.length && value.length > 0}>半选</Checkbox>
        </div>
        <div>
          <CheckboxGroup options={this.options} onChange={this.handleChange3} value={this.state.value}/>
        </div>
        <div style={{ marginTop: 20 }}>
          <Checkbox onChange={this.handleChange1} checked={this.state.checked1} disabled>
            选中不可用
          </Checkbox>
        </div>
        <div style={{ marginTop: 20 }}>
          <Checkbox checked={false} disabled>
            没有选中不可用
          </Checkbox>
        </div>
      </div>
    )
  }
}

storiesOf('data entry', module)
.add('Input', () => {
  return (
    <div>
      <div>
        <InputDemo />
      </div>
    </div>
  )  
})
.add('Upload', () => {
  return (
    <div>
      <UploadDemo />
    </div>
  )
})
.add('Checkbox', () => {
  return (
    <div>
      <CheckboxDemo />
    </div>
  )
})
.add('Radio', () => {
  class RadioDemo extends React.Component {
    state = {
      checked: false,
      value: ''
    }
    options = [{
      label: '红色',
      value: 1
    },{
      label: '蓝色',
      value: 2
    }, {
      label: '绿色',
      value: 3
    }]
    handleChange = checked => {
      this.setState({ checked })
    }
    handleChange2 = value => {
      this.setState({ value })
    }
    render() {
      return (
        <div>
          <Radio onChange={this.handleChange} checked={this.state.checked}>按钮</Radio>
          <div>
            <RadioGroup options={this.options} value={this.state.value} onChange={this.handleChange2}/>
          </div>
          <div>
            <Radio onChange={this.handleChange} checked={this.state.checked} disabled>按钮</Radio>
          </div>
          <div>
            <Radio checked disabled>按钮</Radio>
          </div>
        </div>
      )
    }
  }
  return <RadioDemo />
})
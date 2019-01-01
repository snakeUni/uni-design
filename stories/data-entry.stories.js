import  React from "react";
import { storiesOf } from "@storybook/react";
import Input from '../src/components/input'

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
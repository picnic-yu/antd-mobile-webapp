import React from 'react';
import {changeTextAction,buttonClickAction,loginSuccess} from '../../redux/login/index'
import {  connect } from 'react-redux';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

//定义组件

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    handleLogin(){
        if(this.state.user == 'chen' && this.state.pwd == 'admin'){
            console.log(this.props)
            this.props.history.push('/home');
        }else{

        }
    }
  
    userChange = (value)=>{
        let user = value;
        this.setState({
            user
        });
    }
    pwdChange = (value)=>{
        let pwd = value;
        this.setState({
            pwd
        });
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div style={{marginTop:'25vh'}}>
                <WingBlank>
                    <InputItem
                        {...getFieldProps('autofocus')}
                        clear
                        placeholder="账号chen"
                        value={this.state.user}
                        onChange={this.userChange}
                        ref={el => this.autoFocusInst = el}>账号
                    </InputItem>
                </WingBlank>
                <WingBlank>
                    <InputItem
                        placeholder="密码：admin"
                        value={this.state.pwd}
                        onChange={this.pwdChange}>密码
                    </InputItem>
                </WingBlank>
                
                <WhiteSpace />
                <WingBlank><Button onClick={this.handleLogin}>登陆</Button></WingBlank>

                <WhiteSpace />
                <WingBlank ><Button type='primary' >注册</Button></WingBlank>
            </div>
        );
    }
}

Login = createForm()(Login);

export default Login;

import React from 'react'
import moment from 'moment'
import {Card,Form,Input,Button,Checkbox,Radio,InputNumber,Select,Switch,DatePicker,TimePicker,Upload,message} from 'antd'
import {
    PlusOutlined
  } from '@ant-design/icons';

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option;
const TextArea = Input.TextArea
// const [form] = Form.useForm(); //函数组件中
class FormRegister extends React.Component {
    formRef = React.createRef();
    state = {
        loading: false,
    };
    handleSubmit = () => {
        let userInfo = this.formRef.current.getFieldsValue();
        console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
    }
    handleResetInfo = () => {
        this.formRef.current.resetFields();
    }
    //模拟上传jpg -- 直接从官网复制过来即可 
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg: imageUrl,
            loading: false,
          }));
        }
    }
    render(){
        // const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span:24},
                sm: {span:10}
            },
            wrapperCol: {
                xs: {span:24},
                sm: {span:12},
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: {span:24},
                sm: {
                    span:20, 
                    offset:4
                }
            }
        }
        const rowObject = {
            minRows: 4, 
            maxRows: 6   
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form 
                        ref={this.formRef}
                        layout="horizontal" 
                        initialValues={{
                            userName:'Elena',
                            userPwd:'123456',
                            sex: '1',
                            age: '18',
                            state: '1',
                            hobby: ['1','3','5'],
                            isMarried: false,
                            birthday:moment('2019-1-1 11:14:59'),
                            address:'西虹市海淀区桃花公园'
                            }}
                        onFinish={this.handleSubmit}
                        >
                        <FormItem 
                            label="用户名" 
                            name='userName' 
                            rules={[
                                {
                                    required: true,
                                    message:'用户名不能为空'
                                }
                            ]} 
                            {...formItemLayout}>
                           <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem 
                            label="密码" 
                            name='userPwd' 
                            rules={[
                                {
                                    required: true,
                                    message:'密码不能为空'
                                }
                            ]} {...formItemLayout}>
                            <Input type="password" placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem label="性别" name='sex' {...formItemLayout}>
                            <RadioGroup>
                                <Radio value="1">女</Radio>
                                <Radio value="2">男</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="年龄" name='age' {...formItemLayout}>
                            <InputNumber /> 
                        </FormItem>
                        <FormItem label="当前状态" name='state' {...formItemLayout}>
                            <Select>
                                <Option value="1">咸鱼一条</Option>
                                <Option value="2">人民公仆</Option>
                                <Option value="3">浙传才女一枚</Option>
                                <Option value="4">科技公司FE</Option>
                                <Option value="5">创业者</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="爱好" name='hobby' {...formItemLayout}>
                            <Select mode="multiple">
                                <Option value="1">旅行</Option>
                                <Option value="2">读书</Option>
                                <Option value="3">剪辑</Option>
                                <Option value="4">拍照</Option>
                                <Option value="5">看电影</Option>
                            </Select>
                        </FormItem>
                        <FormItem 
                            label="是否已婚" 
                            name='isMarried' 
                            valuePropName='checked' 
                            {...formItemLayout}>
                            <Switch />
                        </FormItem>
                        <FormItem label="生日" name='birthday' {...formItemLayout}>
                            <DatePicker 
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                            />
                        </FormItem>
                        <FormItem label="联系地址" name='address' {...formItemLayout}>
                            <TextArea autosize={rowObject} />
                        </FormItem>
                        <FormItem label="早起时间" name='time' {...formItemLayout}>
                            <TimePicker />
                        </FormItem>
                        <FormItem label="头像" name='userImg' valuePropName="fileList" {...formItemLayout}>
                            <Upload
                                listType="picture-card"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                onChange={this.handleChange}
                            >
                                {this.state.userImg?<img src={this.state.userImg}/>:<PlusOutlined />}
                            </Upload>
                        </FormItem>
                        <FormItem name='imooc' valuePropName="checked" {...offsetLayout}>
                            <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                        </FormItem>
                        <FormItem {...offsetLayout}>
                             <Button type="primary" htmlType="submit">提交</Button>
                             <Button style={{marginLeft:10}} htmlType="button" onClick={this.handleResetInfo}>重置</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default FormRegister// Form.create()(FormRegister);
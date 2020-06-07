import React, { useState, useEffect } from 'react'
import {
  Row, Col,
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal
} from 'antd';

import logo from './../../assets/images/logo.png';

import { Link } from 'react-router-dom';
import { AppstoreTwoTone } from '@ant-design/icons';

import { Navigator } from './../common/HeaderData';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

export default function Header () {
  const [current, setCurrent] = useState('top');
  const [modalVisible, setModalVisible] = useState(false);
  const [action, setAction] = useState('login');
  const [hasLogined, setHasLogined] = useState(false);
  const [userNickName, setUserNickName] = useState('');
  const [userid, setUserid] = useState(0);
  const [navData, setNavData] = useState();

  const renderMenu = (Navigator) => {
    return Navigator.map((item, index) => {
      return (<Menu.Item key={item.key}>
        <AppstoreTwoTone />{item.title}
      </Menu.Item>)
    })
  }

  useEffect(() => {
    const node = renderMenu(Navigator);
    console.log('node', node);
    setNavData(node);
  }, []);

  /**
   * 登出按钮
   */
  const logout = () => {

  }
  /**
   * 导航回调
   */
  const handleClick = (e) => {
    e.key === "register" ? setModalVisible(true) : setModalVisible(false);
    setCurrent(e.key)
  }

  const callback = (key) => {
    if (key === 1) {
      setAction('login')
    } else if (key === 2) {
      setAction('register')
    }
  }

  const onFinish = values => {
    console.log('Success:', values);

  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  const userShow = hasLogined ?
    <Menu.Item key="logout" className="register">
      <Button type="primary" htmlType="button">{userNickName}</Button>
      <Link to={'/usercenter'}>
        <Button type="dashed" htmlType="button">个人中心</Button>
      </Link>
      <Button type="ghost" htmlType="button" onClick={logout}>退出</Button>
    </Menu.Item> :
    <Menu.Item key="register" className="register">
      <AppstoreTwoTone />登录/注册
    </Menu.Item>
  return (
    <header>
      <Row>
        <Col span={2}></Col>
        <Col span={4}>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            <span>ReactNews</span>
          </Link>
        </Col>
        <Col span={16}>
          <Menu mode="horizontal" onClick={handleClick} selectedKeys={[current]}>
            {navData}
            {userShow}
          </Menu>
        </Col>
        <Modal title="用户中心"
          className="vertical-center-modal"
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          onOk={() => setModalVisible(false)}
          okText="关闭">
          <Tabs type="card" onChange={callback}>
            <TabPane tab="登录" key="1">
              <Form
                style={{ marginTop: "20px" }}
                {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="账户"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input placeholder="请输入您的账号" />
                </Form.Item>
                <Form.Item
                  label="密码"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password placeholder="请输入您的密码" />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    登录
                </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="注册" key="2">
              <Form
                style={{ marginTop: "20px" }}
                {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="注册账户"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input placeholder="请输入您的账号" />
                </Form.Item>

                <Form.Item
                  label="密码"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password placeholder="请输入您的密码" />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="确认密码"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: '请输入确认密码!',
                    },
                    ({ getFieldValue }) => ({
                      validator (rule, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('The two passwords that you entered do not match!');
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    注册
                </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
        <Col span={2}></Col>
      </Row>
    </header>
  )
}

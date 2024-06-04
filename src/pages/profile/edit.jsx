import React from 'react';
import { Button, Flex, Form, Input } from 'antd';
import styled from 'styled-components';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileEditPage = () => {
  const [form] = Form.useForm();
  form.setFieldsValue({
    avatar: 'https://p.ipic.vip/hllizo.JPG',
    name: 'Qiqi Zhao',
    phone: '13152486382',
    country: 'China',
    city: 'Guangdong Huizhou',
    email: 'bme_ritter@foxmail.com',
  });

  const validatePhone = (rule, value) => {
    if (!value) {
      return Promise.resolve();
    }
    const regex = /^1[3-9]\d{9}$/;
    if (!regex.test(value)) {
      return Promise.reject(new Error('Please input your right phone!'));
    }
    return Promise.resolve();
  };

  return (
    <Container>
      <h3>Profile edit</h3>

      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item label="Avatar" name="avatar" rules={[{ required: true, message: 'Please input your avatar link!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, validator: validatePhone, message: 'Please input your phone!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Please input your country!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please input your city!' }]}>
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 16 }}>
          <Flex gap="small">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              danger
              onClick={() => {
                console.log('test', form);
                form.resetFields();
              }}>
              Reset
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Container>
  );
};

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import './_style.scss';

export const SignIn = () => {

  type FieldType = {
    phone?: string;
    password?: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <section id="authorization">
      <div className="wrapper">
        <div className="form">
          <div className="logo">
            <img src="/icon.png" alt="logo" />
            <h2>ZETMARKET B2B</h2>
          </div>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >

            <Form.Item<FieldType>
              name="phone"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input
                placeholder="input username"
                style={{ height: "50px"}}
                size="large"
                type="text"
              />

            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                placeholder="input password"
                style={{ height: "50px" }}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>


          </Form>
        </div>
      </div>
    </section>
  );
};

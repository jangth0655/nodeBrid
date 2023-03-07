import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link href='/'>노드버드</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'>프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'>회원가입</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href='https://www.zerocho.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            제로초 링크
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default AppLayout;

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, Input, Row, Col, MenuProps } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const menuItems: MenuProps['items'] = [
  {
    label: <Link href='/'>노드버드</Link>,
    key: 'home',
    className: 'class1',
  },
  {
    label: <Link href='/profile'>프로필</Link>,
    key: 'profile',
    className: 'class2',
  },
  {
    label: <SearchInput enterButton />,
    key: 'searchInput',
    className: 'class3',
  },
  {
    label: <Link href='/signup'>회원가입</Link>,
    key: 'signup',
    className: 'class4',
  },
];

const AppLayout = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode='horizontal' items={menuItems} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
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

import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <div>
        <Link href='/'>노드버드</Link>
        <Link href='/profile'>프로필</Link>
        <Link href='/signup'>회원가입</Link>
      </div>
      {children}
    </div>
  );
};
export default AppLayout;

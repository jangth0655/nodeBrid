import { Input, Button, Form } from 'antd';
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from './hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducer';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id: 'asdf', password: 'asdf' }));
    if (id && password) {
    }
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name='user-id' value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor='user-password'>패스워드</label>
        <br />
        <Input
          name='user-password'
          type='password'
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <ButtonWrapper>
        <Button type='primary' htmlType='submit' loading={false}>
          로그인
        </Button>
        <Link href='/signup'>
          <button>회원가입</button>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;

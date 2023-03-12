import { NextPage } from 'next';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Button, Checkbox, Form, Input } from 'antd';
import { useCallback, useState } from 'react';
import useInput from '../components/hooks/useInput';
import styled from 'styled-components';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup: NextPage = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback(
    (e: CheckboxChangeEvent) => {
      setTerm(e.target.checked);
      setTermError(false);
    },
    [term]
  );

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [passwordCheck]
  );
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
  }, [id, nickname, password]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor='user-id'>아이디</label>
          <br />
          <Input name='user-id' value={id} required onChange={onChangeId} />
        </div>

        <div>
          <label htmlFor='user-nickname'>닉네임</label>
          <br />
          <Input
            name='user-nickname'
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>

        <div>
          <label htmlFor='user-password'>패스워드</label>
          <br />
          <Input
            name='user-password'
            value={password}
            required
            onChange={onChangePassword}
            type='password'
          />
        </div>

        <div>
          <label htmlFor='user-password-check'>패스워드 체크</label>
          <br />
          <Input
            name='user-password-check'
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
            type='password'
          />
        </div>
        {passwordError && (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        )}
        <div>
          <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
            제로초 말을 잘 들을 것을 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type='primary' htmlType='submit'>
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};
export default Signup;

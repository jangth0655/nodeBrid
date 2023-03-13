import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducer';

interface Props {
  setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction({}));
  }, []);

  return (
    <Card
      actions={[
        <>
          <div key='twit'>
            짹짹 <br />@
          </div>
          <div key='followings'>
            팔로잉 <br />@
          </div>
          <div key='followers'>
            팔로우
            <br />@
          </div>
        </>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title='ZeroCho' />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;

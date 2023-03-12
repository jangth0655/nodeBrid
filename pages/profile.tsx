import { NextPage } from 'next';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowerList';
import NicknameEditForm from '../components/NicknameEditForm';
import { FollowerType } from '../model/types';

const Profile: NextPage = () => {
  const followerList: FollowerType[] = [
    { nickname: '제로초' },
    { nickname: '바보' },
    { nickname: '노드버드오피셜' },
  ];

  const followingList = [
    { nickname: '제로초' },
    { nickname: '바보' },
    { nickname: '노드버드오피셜' },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm data='' />
        <FollowList header='팔로잉 목록' data={followingList} />
        <FollowList header='팔로워 목록' data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;

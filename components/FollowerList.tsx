import { StopOutlined } from '@ant-design/icons';
import { Button, Card, List } from 'antd';
import { FollowerType } from '../model/types';

interface Props {
  data: any;
  header?: any;
}

const FollowerList = ({ header, data }: Props) => {
  return (
    <List
      size='small'
      loadMore={
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>더보기</Button>
        </div>
      }
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 4 }}
      dataSource={data}
      renderItem={(item: FollowerType) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key='stop' />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};
export default FollowerList;

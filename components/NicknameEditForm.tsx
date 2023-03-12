import { Input, Form } from 'antd';
import { useMemo } from 'react';

interface Props {
  data: any;
}

const NicknameEditForm = ({ data }: Props) => {
  const style = useMemo(() => ({}), []);

  return (
    <Form style={style}>
      <Input.Search addonBefore='닉네임' enterButton='수정' />
    </Form>
  );
};
export default NicknameEditForm;

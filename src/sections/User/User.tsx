import { Avatar, Card, Space, Divider } from 'antd';
import { useStoreState } from '../../store/hooks';

export const User = () => {
  const { authData } = useStoreState((state) => state.auth);
  return (
    <Card>
      <Space
        direction='vertical'
        size='large'
        style={{ display: 'flex' }}>
        <Avatar
          size={64}
          icon={<img src={authData.profileObj.imageUrl} />}
        />
        <Divider plain>
          <span className='text-2xl'>Details</span>
        </Divider>
        <div>
          <div className='text-lg font-bold'>
            Name: {authData.profileObj.name}
          </div>
          <div className='text-lg font-bold'>
            Email: {authData.profileObj.email}
          </div>
        </div>
      </Space>
    </Card>
  );
};

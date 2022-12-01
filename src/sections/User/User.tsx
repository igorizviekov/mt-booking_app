import { Avatar, Card, Space, Divider } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useStoreState } from '../../store/hooks';

export const User = () => {
  const { authData } = useStoreState((state) => state.auth);
  return (
    <Content className='flex items-center justify-center mt-12'>
      <Card className='w-1/2'>
        <Space
          direction='vertical'
          size='large'
          className='flex'>
          <div className='flex justify-center'>
            <Avatar
              size={64}
              icon={<img src={authData.profileObj.imageUrl} />}
            />
          </div>
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
    </Content>
  );
};

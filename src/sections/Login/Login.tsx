import { OAuth, Typography } from '../../components';
import { Row, Card } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useTypedSelector } from '../../store/useTypedSelector';

export const Login = () => {
  const { authData } = useTypedSelector((state) => state.auth);
  return (
    <Content className='mt-12'>
      <Card className='w-1/2 mx-auto'>
        <div className='layout-content'>
          <Row
            justify='center'
            align='middle'>
            <Typography
              size={30}
              label={
                authData
                  ? 'You were successfully logged in'
                  : 'Auth with Google to continue'
              }
            />
          </Row>
          <Row
            justify='center'
            align='middle'>
            <OAuth />
          </Row>
        </div>
      </Card>
    </Content>
  );
};

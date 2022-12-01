import { OAuthComponent, Typography } from '../../components';
import { Row, Card } from 'antd';
import { Content } from 'antd/es/layout/layout';

export const Login = () => {
  return (
    <Content className='mt-12'>
      <Card className='w-1/2 mx-auto'>
        <div className='layout-content'>
          <Row
            justify='center'
            align='middle'>
            <Typography
              size={30}
              label='Auth with Google to continue'
            />
          </Row>
          <Row
            justify='center'
            align='middle'>
            <OAuthComponent />
          </Row>
        </div>
      </Card>
    </Content>
  );
};

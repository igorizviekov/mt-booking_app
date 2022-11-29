import { Layout } from 'antd';
import { ToggleTheme } from '../../components';
import { AiFillHome } from 'react-icons/ai';
import { MenuItem } from '../../components';

export const AppHeader = () => {
  const { Header } = Layout;
  return (
    <Header className='flex items-center justify-between p-4 shadow-md'>
      <a href='/'>
        <AiFillHome
          color='blue'
          size='5em'
          title='Home'
        />
      </a>
      <ToggleTheme />
      <MenuItem />
    </Header>
  );
};

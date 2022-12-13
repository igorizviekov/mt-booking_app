import { Layout } from 'antd';
import { ToggleTheme } from '../../components';
import { AiFillHome } from 'react-icons/ai';
import { MenuItem } from '../../components';
import Search from 'antd/es/input/Search';
import { displayErrorMessage } from '../../lib/utils';
import { useEffect, useState } from 'react';

export const AppHeader = () => {
  const { Header } = Layout;

  const onSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      window.location.href = '/listings/' + trimmedValue;
    } else {
      displayErrorMessage('Error', 'Please enter valid value');
    }
  };

  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    const urlParts = window.location.href.split('/');

    const isListingsRoute = urlParts[urlParts.length - 2] === 'listings';
    const location = urlParts[urlParts.length - 1];

    if (isListingsRoute) {
      setLocation(location.replace('%20', ' '));
    }
  }, []);
  return (
    <Header className='flex items-center justify-between p-4 shadow-md'>
      <div className='left-side flex items-center justify-between space-x-5'>
        <a href='/'>
          <AiFillHome
            color='blue'
            size='5em'
            title='Home'
          />
        </a>
        <Search
          value={location}
          className='w-96 shadow-md'
          style={{ borderRadius: '10px' }}
          size='large'
          enterButton
          placeholder='Search "San Fransisco"'
          onSearch={onSearch}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className='right-side flex items-center justify-between space-x-5'>
        <ToggleTheme />
        <MenuItem />
      </div>
    </Header>
  );
};

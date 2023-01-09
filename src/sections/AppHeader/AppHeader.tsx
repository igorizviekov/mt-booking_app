import { AutoComplete, Button, Input, Layout } from 'antd';
import { ToggleTheme } from '../../components';
import { AiFillHome } from 'react-icons/ai';
import { MenuItem } from '../../components';
import { displayErrorMessage } from '../../lib/utils';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStory } from '../../store/reducers/geocodingReducer';
import { useTypedSelector } from '../../store/useTypedSelector';
import { clearStory } from '../../store/reducers/geocodingReducer';

export const AppHeader = () => {
  const { Header } = Layout;
  const dispatch = useDispatch();

  const { searchHistory } = useTypedSelector((state) => state.geocoding);

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
      dispatch(fetchStory());
      setLocation(location.replace('%20', ' '));
    }
  }, []);

  const renderTitle = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <span>Previous addresses</span>
      <Button onClick={() => dispatch(clearStory())}>Clear all</Button>
    </div>
  );

  const renderItem = (title: string) => ({
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        {title}
      </div>
    ),
  });

  const options = searchHistory
    ? [
        {
          label: renderTitle(),
          options: [
            ...searchHistory.map((e) => renderItem(e && e.display_name)),
          ],
        },
      ]
    : [];
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
        <AutoComplete options={options}>
          <Input.Search
            size='large'
            className='w-full'
            placeholder='Search "San Fransisco"'
            value={location}
            onSearch={onSearch}
            onChange={(e) => setLocation(e.target.value)}
          />
        </AutoComplete>
      </div>
      <div className='right-side items-center justify-between space-x-5 hidden md:flex '>
        <ToggleTheme />
        <MenuItem />
      </div>
    </Header>
  );
};

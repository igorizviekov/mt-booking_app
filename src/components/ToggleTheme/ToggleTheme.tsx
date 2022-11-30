import { Switch } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const ToggleTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div className='py-2 px-4 bg-gray-300 border-4 rounded-full'>
      <Switch
        checkedChildren='dark'
        unCheckedChildren='light'
        onChange={() => setDarkTheme(() => !darkTheme)}
      />
    </div>
  );
};

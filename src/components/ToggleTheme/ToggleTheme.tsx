import { Switch } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const ToggleTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <Switch
      checkedChildren='dark'
      unCheckedChildren='light'
      onChange={() => setDarkTheme(() => !darkTheme)}
    />
  );
};

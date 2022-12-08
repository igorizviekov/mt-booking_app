import { Menu } from 'antd';
import { AiOutlineLogin } from 'react-icons/ai';
import { useAppSelector } from '../../store/hooks';
import { selectAuthedUserName } from '../../store/selectors/auth';

export const MenuItem = () => {
  const authData = useAppSelector(selectAuthedUserName);
  const items = [
    {
      label: 'Host',
      key: 'host',
      onClick: () => (window.location.href = '/host'),
    },
    {
      label: authData ? null : 'Log in',
      key: 'login',
      icon: authData ? (
        <img
          src={authData.profileObj.imageUrl}
          alt='user avatar'
          className='rounded-full w-10 h-10'
        />
      ) : (
        <AiOutlineLogin />
      ),
      onClick: () => (window.location.href = '/login'),
    },
  ];
  return (
    <>
      <Menu
        mode='horizontal'
        items={items}
      />
    </>
  );
};

import { Menu } from 'antd';
import { AiOutlineLogin } from 'react-icons/ai';
import { useTypedSelector } from '../../store/useTypedSelector';

export const MenuItem = () => {
  const { authData } = useTypedSelector((state) => state.auth);
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

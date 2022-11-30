import { notification } from 'antd';

export const displaySuccessMessage = (message: string, description: string) => {
  return notification['success']({
    message,
    description,
    placement: 'topLeft',
  });
};

export const displayErrorMessage = (message: string, description: string) => {
  return notification['error']({
    message,
    description,
    placement: 'topLeft',
  });
};

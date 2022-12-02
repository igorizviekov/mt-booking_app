import { InputComponent } from './InputComponent';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Input',
  component: InputComponent,
} as Meta;

const Template: Story = (args: any) => <InputComponent {...args} />;
export const Default = Template.bind({});
Default.args = {
  border: 'normal',
  disabled: false,
  dark: false,
  error: false,
  errorMessage: '',
};

export const Dark = Template.bind({});
Dark.args = {
  border: 'normal',
  dark: true,
  disabled: false,
  error: false,
  errorMessage: '',
};

export const Error = Template.bind({});
Error.args = {
  border: 'normal',
  disabled: false,
  dark: false,
  error: true,
  errorMessage: 'Error text',
};

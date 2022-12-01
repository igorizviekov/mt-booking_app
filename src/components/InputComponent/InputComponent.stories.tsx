import { InputComponent } from './InputComponent';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Input',
  component: InputComponent,
  argTypes: {
    border: {
      description: 'Add rounded border or remove it',
    },
    dark: {
      description: 'Set dark theme',
    },
    disabled: {
      description: 'Disable input',
    },
  },
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

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
  },
} as Meta;

const Template: Story = (args: any) => <InputComponent {...args} />;
export const Default = Template.bind({});
Default.args = {
  border: 'normal',
};

export const Dark = Template.bind({});
Dark.args = {
  border: 'normal',
  dark: true,
};

import { Button } from './Button';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story = (args: any) => <Button {...args}>Hello World!</Button>;
export const Primary = Template.bind({});
Primary.args = {
  styleType: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  styleType: 'secondary',
};

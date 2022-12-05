import { ButtonComponent } from './ButtonComponent';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Button',
  component: ButtonComponent,
} as Meta;

const Template: Story = (args: any) => (
  <ButtonComponent {...args}>Hello World!</ButtonComponent>
);
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

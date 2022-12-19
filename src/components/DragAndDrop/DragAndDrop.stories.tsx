import { DragAndDrop } from './DragAndDrop';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'DragAndDrop',
  component: DragAndDrop,
} as Meta;

const Template: Story = (args: any) => <DragAndDrop {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  image: null,
  setImage: (a: string | ArrayBuffer | null) => null,
  maxFileSize: 1337,
  fileTypes: [],
  required: false,
  label: 'Drop image here',
};

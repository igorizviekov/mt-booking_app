import { DragAndDrop } from './DragAndDrop';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'form/DragAndDrop',
  component: DragAndDrop,
} as Meta;

const Template: Story = (args: any) => <DragAndDrop {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  image: null,
  setImage: (a: null) => null,
  maxFileSize: 1337,
  fileTypes: [],
  required: false,
  label: 'Drop image here',
};

export const WithImage = Template.bind({});
WithImage.args = {
  image:
    'https://imgsv.imaging.nikon.com/lineup/coolpix/p/p7000/img/sample/img_02_b.jpg',
  setImage: (a: null) => null,
  maxFileSize: 1337,
  fileTypes: [],
  required: false,
  label: 'Drop image here',
};

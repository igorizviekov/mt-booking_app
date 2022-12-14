import { Button, Form, Input, InputNumber, Radio } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { BsHouseDoorFill } from 'react-icons/bs';
import { MdApartment } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { useState } from 'react';

export const Host = () => {
  const [image, setImage] = useState<File | null>(null);

  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onFinish = async (values: any) => {
    if (image) {
      values.image = await toBase64(image);
    }
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Content className='p-10'>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        name='listing'>
        <Form.Item
          rules={[{ required: true, message: 'This field can not be empty!' }]}
          label='Home type'
          name='homeType'>
          <Radio.Group>
            <Radio.Button value='horizontal'>
              <div className='flex items-center space-x-2'>
                <BsHouseDoorFill />
                <span>House</span>
              </div>
            </Radio.Button>
            <Radio.Button value='vertical'>
              <div className='flex items-center space-x-2'>
                <MdApartment />
                <span>Apartment</span>
              </div>
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label='Number of guests'
          name='guests'
          rules={[{ required: true, message: 'This field can not be empty!' }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          label='Title'
          name='title'
          rules={[{ required: true, message: 'This field can not be empty!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Description'
          name='description'
          rules={[{ required: true, message: 'This field can not be empty!' }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label='Address'
          name='address'
          rules={[{ required: true, message: 'This field can not be empty!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label='Price'
          name='price'
          rules={[{ required: true, message: 'This field can not be empty!' }]}>
          <InputNumber />
        </Form.Item>
        <div className='flex flex-col items-center w-28'>
          <h4 className='text-center mb-2'>Drop your avatar here</h4>
          <div
            className='w-28
        h-28
        bg-gray-100
        border-xl
        border-2
        border-gray-200
        rounded
        flex
        items-center
        justify-center'>
            <BsPlusLg size='2em' />
          </div>
        </div>
        <Button
          htmlType='submit'
          type='primary'
          className='mt-8'>
          Submit
        </Button>
      </Form>
    </Content>
  );
};

import { Button, Form, Input, InputNumber, Radio } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useState } from 'react';
import { BsHouseDoorFill } from 'react-icons/bs';
import { MdApartment } from 'react-icons/md';
import { DragAndDrop } from '../../components';

export const Host = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const onFinish = async (values: any) => {
    values.image = image;
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
        <DragAndDrop
          fileTypes={['image/jpeg', 'image/png']}
          image={image}
          setImage={setImage}
          maxFileSize={500000}
        />
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

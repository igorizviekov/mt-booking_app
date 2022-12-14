import { Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';

export const NotFound = () => {
  return (
    <Content className='p-10 flex items-center justify-center'>
      <div className='w-1/2 flex flex-col items-center space-y-10 mt-20'>
        <h1 className='text-5xl bold'>Page not found</h1>
        <span className='text-xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          consequuntur ipsam adipisci nulla illo aut non numquam corrupti
          voluptate exercitationem veniam tenetur vitae, eum consequatur illum,
          repellendus qui quos laudantium!
        </span>
        <div className='w-full flex justify-around'>
          <Button
            type='primary'
            href='/'>
            Visit Homepage
          </Button>
          <Button>Contact us</Button>
        </div>
      </div>
    </Content>
  );
};

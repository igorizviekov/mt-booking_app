import React from 'react';
import './index.scss';
import { ButtonComponent } from '../../components';

export const Home = () => {
  return (
    <div className='test-block'>
      <aside className='test-block__list'>
        <a
          href='#'
          className='test-block__link'>
          test 1
        </a>
        <a
          href='#'
          className='test-block__link test-block__link--hover'>
          test 2
        </a>
        <a
          href='#'
          className='test-block__link'>
          test 3
        </a>
      </aside>
      <article className='test-block__text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore fuga
        cupiditate, expedita neque eius reiciendis in iusto natus saepe, culpa
        voluptas nostrum, id quo unde odit facilis corporis minima amet.
      </article>
      <ButtonComponent type={'primary'}>Primary</ButtonComponent>
      <ButtonComponent>Secondary</ButtonComponent>
    </div>
  );
};

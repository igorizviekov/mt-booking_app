import { Button, Form } from 'antd';
import React, { useContext, useRef, useState } from 'react';
import { BsPencil, BsPlusLg } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { IDragAndDropProps } from './dragAndDrop.types';
import './style.scss';
import { ThemeContext } from '../../context/ThemeContext';

export const DragAndDrop: React.FC<IDragAndDropProps> = ({
  image,
  setImage,
  fileTypes,
  maxFileSize = 10000000000000,
  required,
  label,
}) => {
  const [drag, setDrag] = useState<boolean>(false);
  const [fileError, setFileError] = useState<string>('');
  const inputFile = useRef<HTMLInputElement>(null);

  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const toBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const dragStartHandler = (e: any) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e: any) => {
    e.preventDefault();
    setDrag(false);
  };

  const dropHandler = async (e: any) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    if (files[0]) {
      if (
        fileTypes.indexOf(files[0].type) >= 0 &&
        files[0].size < maxFileSize
      ) {
        const fileBase64 = await toBase64(files[0]);
        setImage(fileBase64);
        setFileError('');
      } else {
        setFileError(
          `Please send ${fileTypes.join(
            ', ',
          )} file and that file's size should be ${maxFileSize}`,
        );
      }
    }
    setDrag(false);
  };

  const onButtonClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const uploadFileOnClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (inputFile.current) {
      const filesList = [inputFile.current.files];
      if (filesList[0]) {
        const files = filesList[0];
        if (
          fileTypes.indexOf(files[0].type) >= 0 &&
          files[0].size < maxFileSize
        ) {
          const fileBase64 = await toBase64(files[0]);
          setImage(fileBase64);
          setFileError('');
        } else {
          setFileError(
            `Please send ${fileTypes.join(
              ', ',
            )} file and that file's size should be ${maxFileSize}`,
          );
        }
      }
    }
  };

  return (
    <Form.Item
      name='image'
      rules={[{ required: !!required, message: 'Please input your image!' }]}>
      <div className='drag-and-drop'>
        <div
          className={
            'drag-and-drop__content ' +
            (darkTheme ? 'drag-and-drop__content--dark' : '')
          }>
          <input
            onChange={uploadFileOnClick}
            type='file'
            style={{ display: 'none' }}
            ref={inputFile}
          />
          {image ? (
            <div className='drag-and-drop__img-wrapper'>
              <img
                src={image.toString()}
                className='drag-and-drop__image'
                alt='preview'
              />
              <div className='drag-and-drop__buttons-wrapper'>
                <>
                  <Button
                    onClick={() => setImage(null)}
                    danger>
                    <AiFillDelete />
                  </Button>
                  <Button onClick={onButtonClick}>
                    <BsPencil />
                  </Button>
                </>
              </div>
            </div>
          ) : (
            <div className='drag-and-drop__img-wrapper'>
              <h4
                className={
                  'drag-and-drop__label ' +
                  (darkTheme ? 'drag-and-drop__label--dark' : '')
                }>
                {label}
              </h4>
              <div
                className='drag-and-drop__input-field'
                onDragStart={dragStartHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragStartHandler}
                onDrop={dropHandler}
                onClick={onButtonClick}>
                {drag ? (
                  <span className='drag-and-drop__bounce'>Drop here</span>
                ) : (
                  <BsPlusLg size='2em' />
                )}
              </div>
            </div>
          )}
        </div>
        {fileError ? (
          <div className='drag-and-drop__file-error'>{fileError}</div>
        ) : null}
      </div>
    </Form.Item>
  );
};

import { Button, Form } from 'antd';
import React, { useRef, useState } from 'react';
import { BsPencil, BsPlusLg } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

interface IDragAndDropProps {
  image: string | ArrayBuffer | null;
  setImage: (a: string | ArrayBuffer | null) => any;
  maxFileSize: number;
  fileTypes: Array<string>;
  required?: boolean;
  label: string;
}

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
          `Please send png or jpeg file and that file's size should be ${maxFileSize}`,
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
            `Please send png or jpeg file and that file's size should be ${maxFileSize}`,
          );
        }
      }
    }
  };

  return (
    <Form.Item
      name='image'
      rules={[{ required: !!required, message: 'Please input your image!' }]}>
      <div className='flex flex-col'>
        <div className='flex items-center dark:bg-black'>
          <input
            onChange={uploadFileOnClick}
            type='file'
            style={{ display: 'none' }}
            ref={inputFile}
          />
          {image ? (
            <div className='flex flex-col items-center h-44 w-28 justify-between'>
              <img
                src={image.toString()}
                className='h-28 w-28 rounded'
                alt='preview'
              />
              <div className='flex justify-between w-28'>
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
            <div className='flex flex-col items-center h-44 w-28 justify-between'>
              <h4 className='text-center dark:text-white'>{label}</h4>
              <div
                className='
                    w-28
                    h-28
                    bg-gray-100
                    border-xl
                    border-2
                    border-gray-200
                    rounded
                    flex
                    items-center
                    justify-center'
                onDragStart={dragStartHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragStartHandler}
                onDrop={dropHandler}
                onClick={onButtonClick}>
                {drag ? (
                  <span className='animate-bounce'>Drop here</span>
                ) : (
                  <BsPlusLg size='2em' />
                )}
              </div>
            </div>
          )}
        </div>
        {fileError ? (
          <div className='mt-4 text-red-500 font-bold w-64'>{fileError}</div>
        ) : null}
      </div>
    </Form.Item>
  );
};

import { Button } from 'antd';
import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';

interface IDragAndDropProps {
  image: string | ArrayBuffer | null;
  setImage: (a: string | ArrayBuffer | null) => any;
  maxFileSize: number;
  fileTypes: Array<string>;
}

export const DragAndDrop: React.FC<IDragAndDropProps> = ({
  image,
  setImage,
  fileTypes,
  maxFileSize = 10000000000000,
}) => {
  const [drag, setDrag] = useState<boolean>(false);
  const [fileError, setFileError] = useState<string>('');

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

  const clickHandler = (e: any) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    console.log(files);
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

  return (
    <div className='flex flex-col'>
      <div className='flex items-center dark:bg-black'>
        <div className='flex flex-col items-center h-44 w-28 justify-between'>
          <h4 className='text-center dark:text-white'>Drop your image here</h4>
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
            onClick={clickHandler}>
            {drag ? (
              <span className='animate-bounce'>Drop here</span>
            ) : (
              <BsPlusLg size='2em' />
            )}
          </div>
        </div>
        {image ? (
          <div className='flex flex-col justify-between ml-10 h-44'>
            <img
              src={image.toString()}
              className='h-32 rounded'
            />
            <Button
              onClick={() => setImage(null)}
              className='w-24'
              danger>
              Delete
            </Button>
          </div>
        ) : null}
      </div>
      {fileError ? (
        <div className='mt-4 text-red-500 font-bold w-64'>{fileError}</div>
      ) : null}
    </div>
  );
};

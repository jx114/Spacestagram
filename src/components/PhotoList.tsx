import React from 'react';
import { ImageList } from '@mui/material';
// @ts-ignore #1

import { TPhoto, TPhotoList } from './types';
// @ts-ignore #1
import Photo from './Photo.tsx';

export type TProps = {
  list: TPhotoList,
  // eslint-disable-next-line no-unused-vars
  imageClick?: (photo: TPhoto) => void,
}

const PhotoList = (
  {
    list, imageClick,
  }: TProps,
) => (
  <ImageList cols={3} rowHeight="auto" style={{ margin: '5%' }}>
    {list.map((item: TPhoto) => (
      <Photo
        key={item.id}
        photo={item}
        imageClick={imageClick}
      />
    ))}
  </ImageList>
);

export default PhotoList;

import React from 'react';
import { ImageList } from '@mui/material';
// @ts-ignore #1
import { TPhoto, TPhotoList } from './types.ts';
// @ts-ignore #1
import Photo from './Photo.tsx';

const PhotoList = ({ list }: { list: TPhotoList }) => (
  <ImageList cols={3} rowHeight="auto">
    {list.map((item: TPhoto) => (
      <Photo key={item.id} photo={item} />
    ))}
  </ImageList>
);

export default PhotoList;

import React from 'react';
// @ts-ignore #1
import { TPhoto, TPhotoList } from './types.ts';
// @ts-ignore #1
import Photo from './Photo.tsx';

const PhotoList = ({ list }: { list: TPhotoList }) => (
  <ul>
    {
      list.map((photo: TPhoto) => (
        <Photo photo={photo} />
      ))
    }
  </ul>
);

export default PhotoList;

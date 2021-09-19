import React from 'react';
import { ImageListItem } from '@mui/material';
// Types
// @ts-ignore #1
import { TPhoto } from './types.ts';

const Photo = ({ photo }: { photo: TPhoto }) => {
  // const { id, title, date, liked, thumbnail, hdPicture, details, copyright, type } = photo;
  const {
    thumbnail, title, id,
  } = photo;
  return (
    <ImageListItem key={id}>
      <img
        src={`${thumbnail}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${thumbnail}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
    </ImageListItem>
  );
};
export default Photo;

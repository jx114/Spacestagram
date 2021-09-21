import React from 'react';
import { ImageListItem } from '@mui/material';
// Types
// @ts-ignore #1
// import { TPhoto } from './types.ts';

// export interface IProps {
//   photo: TPhoto,
//   imageClick: (any) => void,
// }

const Photo = ({ photo, imageClick }: any) => {
  // const { id, title, date, liked, thumbnail, hdPicture, details, copyright, type } = photo;
  const {
    thumbnail, title, id,
  } = photo;
  return (
    <ImageListItem key={id} onClick={() => imageClick(id)}>
      <img
        src={`${thumbnail}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${thumbnail}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
        style={{ cursor: 'pointer' }}
      />
    </ImageListItem>
  );
};
export default Photo;

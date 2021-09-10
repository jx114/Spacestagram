import React from 'react';

// Types
// @ts-ignore #1
import { TPhoto } from './types.ts';

const Photo = ({ photo }: { photo: TPhoto }) => {
  // const { id, title, date, liked, thumbnail, hdPicture, details, copyright, type } = photo;
  const { title } = photo;
    <div>{title}</div>;
};
export default Photo;

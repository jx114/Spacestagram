import React from 'react';

// Types
// @ts-ignore #1
import { TPhoto } from './types.ts';

const Photo = ({ photo }: { photo: TPhoto }) => {
  // const { id, title, date, liked, thumbnail, hdPicture, details, copyright, type } = photo;
  const {
    title, date, hdPicture, details, copyright, type,
  } = photo;
  console.log('PROPS:', photo);
  const [year, month, day] = date.split('-');
  const imageSettings = {
    height: '300',
    width: '350',
  };
  return (
    <div className="card">
      <div className="card-image">
        <img src={hdPicture} alt={type} width={imageSettings.width} height={imageSettings.height} />
      </div>
      <div className="card-title">
        {`${title} captured on ${month},${day},${year}`}
      </div>
      <div className="card-details">
        {details}
      </div>
      <div className="card-copyright">
        {`© ${year} ${copyright} `}
      </div>
      <div className="like-button">
        <button type="button">Like</button>
      </div>
    </div>
  );
};
export default Photo;

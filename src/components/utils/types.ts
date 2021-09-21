import { ReactElement } from 'react';

export type TPhoto = {
  id: number;
  title: string;
  date: string;
  liked: boolean;
  thumbnail: string;
  hdPicture: string;
  details: string;
  copyright: string;
  type: string;
};
export type TPhotoList = {
  list: TPhoto[] | null;
};

export type TModal = {
  open: boolean;
  ariaLabelledby: string;
  ariaDescribedby: string;
  children: ReactElement | ReactElement []
}

export type NasaPhoto = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  // eslint-disable-next-line camelcase
  media_type: string;
  title: string;
  url: string;
  id: string;
};

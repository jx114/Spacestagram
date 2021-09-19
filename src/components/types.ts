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
  list: TPhoto[];
};

export type NasaPhoto = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  mediaType: string;
  title: string;
  url: string;
  id: string;
};

export type TPhoto = {
  id: number;
  title: string;
  date: Date;
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
  date: Date;
  explanation: string;
  hdurl: string;
  mediaType: string;
  title: string;
  url: string;
};

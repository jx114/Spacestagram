// @ts-ignore
// #1
import { TPhoto, NasaPhoto } from '../types.ts';

export default (input: NasaPhoto): TPhoto => ({
  title: input.title,
  copyright: input.copyright,
  date: input.date,
  thumbnail: input.url,
  hdPicture: input.hdurl,
  details: input.explanation,
  type: input.media_type,
});

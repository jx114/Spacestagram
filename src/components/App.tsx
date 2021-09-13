import React, { useState } from 'react';
// @ts-ignore
// 1: some issue with file importing that you cant import tsx files.
import { TPhotoList } from './types.ts';
// Components
// @ts-ignore #1
import PhotoList from './PhotoList.tsx';

// Util
// @ts-ignore #1
// import formatFromNasa from './utils/formatFromNasa.ts';

export interface IState {
  photoList: TPhotoList,
}
function App() {
  const [list] = useState<IState['photoList']>([
    {
      title: 'Henlo World',
      date: '2021-09-10',
      details: "Faint comet Churyumov-Gerasimenko (67P) sweeps past background stars in the constellation Taurus and even fainter distant galaxies in this telescopic frame from September 7. About 5 years ago, this comet's 4 kilometer spanning, double-lobed nucleus became the final resting place of robots from planet Earth, following the completion of the historic Rosetta mission to the comet. After wandering out beyond the orbit of Jupiter, Churyumov-Gerasimenko is now returning along its 6.4 year periodic orbit toward its next perihelion or closest approach to the Sun, on November 2. On November 12, the comet's perigee, its closest approach to Earth, will bring it within about 0.42 astronomical units. Telescopes should still be required to view it even at its brightest, predicted to be in late November and December. On September 7 Rosetta's comet was about 0.65 astronomical units away or about 5.4 light-minutes from our fair planet.",
      hdPicture: 'https://apod.nasa.gov/apod/image/2109/67P_210907.jpg',
      thumbnail: 'https://apod.nasa.gov/apod/image/2109/67P_210907_1024.jpg',
      type: 'image',
      copyright: 'CARA Project',
      liked: false,
    },
    {
      title: 'Gudbye World',
      date: '2021-09-10',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem ligula, maximus id nibh quis, semper malesuada arcu. Nam hendrerit viverra erat, ut hendrerit magna ornare vel. Suspendisse sagittis semper ornare. Etiam accumsan tellus eu nisl dapibus, ac cursus orci dignissim. Vestibulum volutpat facilisis velit, suscipit efficitur urna commodo ac. Aenean justo lectus, eleifend id faucibus a, dictum eu ante. Maecenas vel posuere tellus, eu cursus odio. Vivamus ut urna non magna mollis pellentesque finibus at libero. Integer eget mollis orci. Morbi sed nisl sit amet sem rutrum sagittis at vel nisl. Sed mollis at dui sodales pretium. Duis convallis, nisi at pretium dapibus, turpis nunc tempus massa, sit amet rhoncus nibh dolor elementum turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      hdPicture: 'https://apod.nasa.gov/apod/image/2109/67P_210907.jpg',
      thumbnail: 'https://apod.nasa.gov/apod/image/2109/67P_210907_1024.jpg',
      type: 'image',
      copyright: 'CARA Project',
      liked: false,
    },
  ]);

  return (
    <div className="App">
      <h1 className="title">Spacestagram</h1>
      <div className="list-card">
        <PhotoList list={list} />
      </div>
    </div>
  );
}
export default App;

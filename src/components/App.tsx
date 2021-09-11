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
    },
    {
      title: 'Gudbye World',
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

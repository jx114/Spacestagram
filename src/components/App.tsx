import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// @ts-ignore
// 1: some issue with file importing that you cant import tsx/ts files.
import { TPhotoList } from './types.ts';
// Components
// @ts-ignore #1
import PhotoList from './PhotoList.tsx';

// Util
// @ts-ignore #1
import formatFromNasa from './utils/formatFromNasa.ts';

export interface IState {
  photoList: TPhotoList,
}
function App() {
  const [list, setList] = useState<IState['photoList']>([]);
  useEffect(() => {
    axios.get('/api/readAPODS')
      .then(({ data }) => {
        console.log('DATA DATA DATA', data);
        const formatted = data.map((apod: any) => formatFromNasa(apod));
        console.log('FORMATTED FORMATTED FORMATTED', formatted);
        setList(formatted);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      {list ? (
        <>
          <h1 className="title">Spacestagram</h1>
          <div className="list-card">
            <PhotoList list={list} />
          </div>
        </>
      ) : <h1>Loading</h1>}
    </div>
  );
}
export default App;

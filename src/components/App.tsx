import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

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
export default function App() {
  const [list, setList] = useState<IState['photoList']>([]);
  const getPhotos = () => {
    axios.get('/api/readAPODS')
      .then(({ data }) => {
        const formatted = data.map((apod: any) => formatFromNasa(apod));
        console.log('FORMATTED FORMATTED FORMATTED', formatted.data);
        setList(formatted);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getPhotos, []);

  return (
    <div className="App">
      {list
        ? (
          <>
            <Container maxWidth="lg">
              <Typography variant="h2" className="title">Spacestagram</Typography>
              <div className="list-card">
                <PhotoList list={list} />
              </div>
            </Container>
          </>
        )
        : <h1>Loading</h1>}
    </div>
  );
}

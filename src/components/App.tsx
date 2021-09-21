/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import _ from 'lodash';

import { NasaPhoto } from './types';

// Components
import PhotoList from './PhotoList';
import ImageViewer from './ImageViewer';

// Util
import formatFromNasa from './utils/formatFromNasa';

export default function App() {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [activePhotoId, setActivePhotoId] = useState<string>('');
  const indexedPhotos = useMemo(() => _.keyBy(list, 'id'), [list]);
  const activePhoto = indexedPhotos[activePhotoId];
  console.log('INDEXED PHOTOS', indexedPhotos);
  console.log('ACTIVE PHOTO ACTIVE PHOTO', activePhoto);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getPhotos = () => {
    axios.get('/api/readAPODS')
      .then(({ data }) => {
        const formatted = data.map((apod: NasaPhoto) => formatFromNasa(apod));
        setList(formatted);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(getPhotos, []);

  const imageClick = (id: string) => {
    console.log(`This is clicked id: ${id}, this is activePhotoId: ${activePhotoId}`);
    setActivePhotoId(id);
    handleOpen();
  };

  return (
    <div className="App">
      {list
        ? (
          <>
            <Container maxWidth="lg">
              <Typography variant="h2" className="title">Spacestagram</Typography>
              {
                activePhoto
                  ? (
                    <ImageViewer
                      open={open}
                      onClose={handleClose}
                      photo={activePhoto}
                      onOpen={handleOpen}
                      getPhotos={getPhotos}
                      setActivePhotoId={setActivePhotoId}
                    />
                  )
                  : <></>
              }
              <div className="list-card">
                <PhotoList list={list} imageClick={imageClick} />
              </div>
            </Container>
          </>
        )
        : <h1>Loading</h1>}
    </div>
  );
}

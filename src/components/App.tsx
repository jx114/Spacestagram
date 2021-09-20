/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

import { NasaPhoto } from './types';

// Components
import PhotoList from './PhotoList';
import ImageViewer from './ImageViewer';

// Util
import formatFromNasa from './utils/formatFromNasa';

export default function App() {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getPhotos = () => {
    axios.get('/api/readAPODS')
      .then(({ data }) => {
        const formatted = data.map((apod: NasaPhoto) => formatFromNasa(apod));
        setList(formatted);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getPhotos, []);
  const imageClick = (id: string) => {
    list.forEach((element: any) => {
      if (id === element.id) {
        setActivePhoto(element);
      }
    });
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

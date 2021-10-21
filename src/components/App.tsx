/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, {
  useState, useEffect, useMemo,
} from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Container, IconButton } from '@mui/material';

// Components
import PhotoList from './PhotoList';
import ImageViewer from './ImageViewer/ImageViewer';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// Util
import formatFromNasa from './utils/formatFromNasa';
import { NasaPhoto } from './utils/types';

export default function App() {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [activePhotoId, setActivePhotoId] = useState<string>('');
  const indexedPhotos = useMemo(() => _.keyBy(list, 'id'), [list]);
  const activePhoto = indexedPhotos[activePhotoId];
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
    setActivePhotoId(id);
    handleOpen();
  };

  return (
    <div className="App">
      {list
        ? (
          <>
            <Container maxWidth="lg">
              <Header />
              <IconButton sx={{ ml: 1 }} color="inherit" />
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
              <Footer />
            </Container>
          </>
        )
        : <h1>Loading</h1>}
    </div>
  );
}

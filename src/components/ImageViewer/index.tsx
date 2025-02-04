/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, Typography, ModalUnstyled, Container, Grid, styled, Snackbar, Alert, IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import styles from '../utils/styles';

const { box, modal, backdrop } = styles;
const Modal = styled(ModalUnstyled)`${modal}`;
const Backdrop = styled('div')`${backdrop}`;

export default function ImageViewer({
  open, onClose, photo, getPhotos,
}: any) {
  const {
    title, details, copyright, hdPicture, date, id, liked,
  } = photo;
  const [year, month, day] = date.split('-');
  const [snack, setSnack] = useState(false);

  const openSnack = () => {
    setSnack(true);
  };
  const closeSnack = () => {
    setSnack(false);
  };

  const likeClick = (_id: string) => {
    const url = `/api/patchLikes/${_id}`;
    axios.patch(url, { liked: !liked })
      .then(() => {
        getPhotos();
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
        disableEnforceFocus
      >
        <Box sx={box}>
          <Container>
            <div className="modal-image">
              <img
                style={{ borderRadius: '15px', display: 'block' }}
                src={`${hdPicture}`}
                srcSet={hdPicture}
                alt={title}
                loading="lazy"
                height="100%"
                width="100%"
                max-width="95px"
              />
            </div>
            {/* <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {`${title}`}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Typography id="modal-modal-date" sx={{ mt: 2 }}>
                  {`Captured on: ${month}/${day}/${year}`}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton sx={{ ml: 1 }} color="inherit">
                  {
                    liked
                      ? (<FavoriteIcon sx={{ color: 'red', cursor: 'pointer' }} onClick={() => (likeClick(id))} />)
                      : (<FavoriteBorderIcon sx={{ cursor: 'pointer' }} onClick={() => (likeClick(id))} />)
                  }
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <IconButton sx={{ ml: 1 }} color="inherit">
                  <ShareIcon
                    style={{ cursor: 'copy', color: '#6875EF' }}
                    onClick={() => {
                      navigator.clipboard.writeText(hdPicture);
                      openSnack();
                    }}
                  />
                </IconButton>
                <Snackbar open={snack} autoHideDuration={2000} onClose={closeSnack}>
                  <Alert severity="info" onClose={closeSnack} sx={{ width: '100%' }}>
                    Copied link to clipboard!
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {details}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={8}>
                {
                  copyright
                    ? (
                      <Typography id="modal-modal-copyright" sx={{ mt: 1 }}>
                        {`© ${year} ${copyright} `}
                      </Typography>
                    )
                    : <></>
                }
              </Grid>
            </Grid> */}
          </Container>
        </Box>
      </Modal>
    </div>
  );
}

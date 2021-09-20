/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react';
import axios from 'axios';
import {
  Box, Typography, ModalUnstyled, Container, Grid, styled, Snackbar, Alert,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import styles from './utils/styles';

const { box, modal, backdrop } = styles;
const Modal = styled(ModalUnstyled)`${modal}`;
const Backdrop = styled('div')`${backdrop}`;

export default function ImageViewer({
  open, onClose, photo, getPhotos,
}: any) {
  console.log('PHOTO PHOTO', photo);
  const [like, setLike] = React.useState(false);
  const [snack, setSnack] = React.useState(false);

  const openSnack = () => {
    setSnack(true);
  };
  const closeSnack = () => {
    setSnack(false);
  };

  const likeClick = (id: string) => {
    if (like === true) {
      setLike(false);
      console.log('FALSE', like);
    } else {
      setLike(true);
      console.log('TRUE', like);
    }
    const url = `/api/patchLikes/${id}`;
    axios.patch(url, { liked: like })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getPhotos, [like]);

  const {
    title, details, copyright, hdPicture, date, id, liked,
  } = photo;

  const [year, month, day] = date.split('-');

  console.log('STATE LIKED LIKED', like);
  console.log('PHOTO LIKED LIKED', liked);

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
      >
        <Box sx={box}>
          <Container fixed maxWidth="md">
            <img
              src={`${hdPicture}`}
              srcSet={hdPicture}
              alt={title}
              loading="lazy"
              width="100%"
              height="100%"
            />
            <Grid
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
                {
                  like
                    ? (<FavoriteIcon sx={{ color: 'red' }} onClick={() => (likeClick(id))} />)
                    : (<FavoriteBorderIcon onClick={() => (likeClick(id))} />)
                }
              </Grid>
              <Grid item xs={2}>
                <ShareIcon onClick={() => {
                  navigator.clipboard.writeText(hdPicture);
                  openSnack();
                }}
                />
                <Snackbar open={snack} autoHideDuration={3000} onClose={closeSnack}>
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
            </Grid>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}

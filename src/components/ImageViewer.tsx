/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react';
import {
  Box, Typography, ModalUnstyled, Container, Grid, styled,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import styles from './utils/styles';

const { box, modal, backdrop } = styles;
const Modal = styled(ModalUnstyled)`${modal}`;
const Backdrop = styled('div')`${backdrop}`;

const ImageViewer = ({
  open, onClose, photo,
}: any) => {
  // const { id, title, date, liked, thumbnail, hdPicture, details, copyright, type } = photo;
  const {
    title, details, copyright, hdPicture, date,
  } = photo;
  const [year, month, day] = date.split('-');
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
                <FavoriteBorderIcon />
              </Grid>
              <Grid item xs={2}>
                <ShareIcon />
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
};

export default ImageViewer;

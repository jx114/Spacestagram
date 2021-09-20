import * as React from 'react';
import {
  Box, Button, Typography, Modal, Container,
} from '@mui/material';
// import { TPhoto } from './types.ts';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '2000',
  maxHeight: '1000',
  bgcolor: 'rgb(166,166,166, .85)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// export interface IImageViewerProps {
//   open: boolean,
//   onClose: () => void,
//   photo: TPhoto,
//   handleOpen: () => void,
// }
const photo = {
  title: 'Henlo Wolrd',
  date: '9-10-2021',
  hdPicture: 'https://apod.nasa.gov/apod/image/2109/RubinsGalaxy_hst2000.jpg',
  details: "In this Hubble Space Telescope image the bright, spiky stars lie in the foreground toward the heroic northern constellation Perseus and well within our own Milky Way galaxy. In sharp focus beyond is UGC 2885, a giant spiral galaxy about 232 million light-years distant. Some 800,000 light-years across compared to the Milky Way's diameter of 100,000 light-years or so, it has around 1 trillion stars. That's about 10 times as many stars as the Milky Way. Part of an investigation to understand how galaxies can grow to such enormous sizes, UGC 2885 was also part of An Interesting Voyage and astronomer Vera Rubin's pioneering study of the rotation of spiral galaxies. Her work was the first to convincingly demonstrate the dominating presence of dark matter in our universe.",
  copyright: 'Andrew Klinger',
};
const ImageViewer = ({
  open, onClose, onOpen,
}: any) => {
  // const { id, title, date, liked, thumbnail, hdPicture, details, copyright, type } = photo;
  const {
    title, date, details, copyright, hdPicture,
  } = photo;
  const [day, month, year] = date.split('-');
  return (
    <div>
      <Button onClick={onOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`${title} captured at: ${month}/${day}/${year}`}
          </Typography>
          <Container fixed maxWidth="sm">
            <img
              src={`${hdPicture}?w=164&h=164&fit=crop&auto=format`}
              srcSet={hdPicture}
              alt={title}
              loading="lazy"
              width="500"
            />
          </Container>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            { details }
          </Typography>
          {
            copyright
              ? (
                <Typography id="modal-modal-copyright" sx={{ mt: 1 }}>
                  {`© ${year} ${copyright} `}
                </Typography>
              )
              : <></>
          }
        </Box>
      </Modal>
    </div>
  );
};

export default ImageViewer;

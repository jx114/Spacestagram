import React from 'react';
import {
  Grid, Typography, Container,
} from '@mui/material';

const Header = () => (
  <Container maxWidth="lg">
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      margin={5}
    >
      <Grid item xs={9}>
        <Typography variant="h2" className="title">Spacestagram</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6" className="title-emblem-description">Powered by</Typography>
      </Grid>
      <Grid item xs={7}>
        <Typography variant="h6" className="title-description">Image-sharing from the final frontier</Typography>
      </Grid>
      <Grid item xs={3}>
        <a href="https://api.nasa.gov/" target="_blank" rel="noreferrer">
          <img
            src="https://seekvectorlogo.com/wp-content/uploads/2018/02/nasa-vector-logo.png"
            alt=""
            height="50%"
            width="50%"
          />
        </a>
      </Grid>
    </Grid>
  </Container>
);

export default Header;

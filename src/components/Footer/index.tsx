import React from 'react';
import { Grid, Typography } from '@mui/material';

const date = new Date();
const year = date.getFullYear();

const Footer = () => (
  <>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      margin="5%"
    >
      <Grid item xs={1}>
        <a href="https://www.linkedin.com/in/jacky-xia-8aa261161/" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="" />
        </a>
      </Grid>
      <Grid item xs={1}>
        <a href="https://github.com/jx114/spacestagram" target="_blank" rel="noreferrer">
          <img src="https://img.icons8.com/fluency/48/000000/github.png" alt="" />
        </a>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5" className="footer-copyright">{`Jacky Xia © ${year}`}</Typography>
      </Grid>
    </Grid>
  </>
);

export default Footer;

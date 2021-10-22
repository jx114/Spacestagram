import React from 'react';
import {
  Grid, Typography, Container, useMediaQuery,
} from '@mui/material';

const Header = () => {
  const viewPortSize = useMediaQuery('(min-width:650px)');
  const item1 = viewPortSize
    ? 9 : 12;
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        margin={5}
      >
        <Grid item xs={item1}>
          <Typography variant="h2" className="title">Spacestagram</Typography>
          <Typography variant="h6" className="title-description">Image-sharing from the final frontier</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" className="title-emblem-description">Powered by</Typography>
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
};

// Try putting two grids side by side in the container
// Or else I would need two containers with two separate grids.
// two rows one column in one container, same for the other
// Look at media_query for responsiveness if elements are misplaced.

export default Header;

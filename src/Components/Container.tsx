import { createStyles, Box, Hidden, makeStyles } from '@material-ui/core';
import * as React from 'react';
import Sidebar from './AppContainer/Sidebar/Sidebar';
import Header from './Header/Header';

// interface IContainerProps {
// }

const useStyles = makeStyles((theme) =>
  createStyles({
    boxContainer: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateRows: '2fr 10fr',
      gridTemplateColumns: '2fr 10fr',
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '12fr',
      },
    },
    sidebar: {
      background: 'rgba(227,184,115, 0.6)',
      gridArea: '2 / 1 / 3 / 2',
    },
    main: {
      padding: 10,
      background: 'white',
      gridArea: '2 / 2 / 3 / 3',
      [theme.breakpoints.down('md')]: {
        gridArea: '2 / 1 / 3 / 3',
      },
    },
    header: {
      background: 'rgba(193,38,54, 0.6)',
      position: 'sticky',
      top: 0,
      gridArea: '1 / 1 / 2 / 3',
    },
  }),
);

const Container: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Hidden mdDown>
        <Box className={classes.sidebar}>
          <Sidebar />
        </Box>
      </Hidden>
      <Box className={classes.main}>{children}</Box>
    </Box>
  );
};

export default Container;

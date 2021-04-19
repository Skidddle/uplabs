import { Hidden, IconButton, Drawer, makeStyles, createStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from '../AppContainer/Sidebar/Sidebar';

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: 450,
    },
    header: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    iconButton: {
      marginLeft: 20,
    },
  }),
);

const Header: React.FunctionComponent = () => {
  const [isOpen, setisOpen] = useState(false);
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Hidden lgUp>
        <IconButton
          className={classes.iconButton}
          onClick={() => {
            setisOpen(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer className={classes.drawer} open={isOpen}>
          <Sidebar />
        </Drawer>
      </Hidden>
    </Box>
  );
};

export default Header;

import { createStyles, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Pages from '../../../constants/paths';

const SidebarButtons = [
  { label: 'Page 1', path: Pages.Page1 },
  { label: 'Page 2', path: Pages.Page2 },
  { label: 'Page 3', path: Pages.Page3 },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: 'red',
    },
    list: {
      [theme.breakpoints.down('md')]: {
        width: 250,
      },
    },
    list__item: {
      textAlign: 'center',
    },
  }),
);

const Sidebar: React.FC = () => {
  const classes = useStyles();
  return (
    <List className={classes.list} disablePadding component="nav">
      {SidebarButtons.map((button) => (
        <ListItem
          className={classes.list__item}
          button
          component={NavLink}
          activeClassName={classes.root}
          to={button.path}
        >
          <ListItemText primary={button.label} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/LibraryAdd";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface ITopNavBar {
  onAddClick: () => void;
}

const NavBar: React.FC<ITopNavBar> = ({ onAddClick }: ITopNavBar): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onAddClick}
          >
            <AddIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cards
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import AddIcon from "@material-ui/icons/Add";
import React, { ReactElement } from "react";

const fabButtonGeneral: CSSProperties = {
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
    },
    fabButton: {
      ...fabButtonGeneral,
      margin: "0 auto",
    },
    [theme.breakpoints.down("md")]: {
      fabButton: {
        ...fabButtonGeneral,
        margin: "0 10px 0 auto",
      },
    },
  }),
);

interface IBottomAppBar {
  onAddClick: () => void;
}

const BottomAppBar: React.FC<IBottomAppBar> = ({ onAddClick }: IBottomAppBar): ReactElement => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={onAddClick}>
            <AddIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default BottomAppBar;

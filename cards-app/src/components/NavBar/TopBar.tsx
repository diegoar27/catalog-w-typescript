import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/LibraryAdd";
import ISortOption from "models/SortOption";
import React, { ReactElement } from "react";
import SortBar from "./SortBar";

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

export interface ITopNavBar {
  onAddClick: () => void;
  onSortChange: (sort: ISortOption) => void;
}

const NavBar: React.FC<ITopNavBar> = ({ onAddClick, onSortChange }: ITopNavBar): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Grid container spacing={1}>
          <Grid item md={6} sm={6} xs={4}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="add-card"
                onClick={onAddClick}
              >
                <AddIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Cards
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item md={6} sm={6} xs={8}>
            <SortBar onChange={(option) => onSortChange(option)} />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default NavBar;

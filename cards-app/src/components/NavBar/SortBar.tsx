import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ISortOption from "models/SortOption";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
  container: {},
  sortLabel: {
    color: "white",
  },
}));

export interface ISortBar {
  onChange: (option: ISortOption) => void;
}

const SortBar: React.FC<ISortBar> = ({ onChange }: ISortBar) => {
  const [sortBy, setSortBy] = useState("id");
  const [direction, setDirection] = useState("asc");
  const classes = useStyles();

  useEffect(() => {
    onChange({ field: sortBy, direction: direction });
  }, [sortBy, direction]);

  const handleSortCriteriaChange = (event: React.MouseEvent<HTMLElement>, sortCriteria: string | null) => {
    event.preventDefault();

    if (sortCriteria) {
      setSortBy(sortCriteria);
    }
  };

  const handleSortDirectionChange = (event: React.MouseEvent<HTMLElement>, sortDir: string | null) => {
    event.preventDefault();

    if (sortDir) {
      setDirection(sortDir);
    }
  };

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item md={6} sm={6} xs={6}>
        <div className={classes.toggleContainer}>
          <Typography variant="button" className={classes.sortLabel}>
            Sort by:
          </Typography>
          <ToggleButtonGroup
            size="small"
            value={sortBy}
            exclusive
            onChange={handleSortCriteriaChange}
            aria-label="sort criteria"
          >
            <ToggleButton size="small" value="id" aria-label="id sort">
              <Typography variant="button" className={classes.sortLabel}>
                Id
              </Typography>
            </ToggleButton>
            <ToggleButton size="small" value="title" aria-label="title sort">
              <Typography variant="button" className={classes.sortLabel}>
                Title
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <div className={classes.toggleContainer}>
          <Typography variant="button" className={classes.sortLabel}>
            Direction:
          </Typography>
          <ToggleButtonGroup
            value={direction}
            exclusive
            onChange={handleSortDirectionChange}
            aria-label="sort direction"
            size="small"
          >
            <ToggleButton size="small" value="asc" aria-label="dir asc">
              <Typography variant="button" className={classes.sortLabel}>
                ASC
              </Typography>
            </ToggleButton>
            <ToggleButton size="small" value="desc" aria-label="dir desc">
              <Typography variant="button" className={classes.sortLabel}>
                DESC
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Grid>
    </Grid>
  );
};

export default SortBar;

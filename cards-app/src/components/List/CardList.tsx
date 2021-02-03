import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from 'components/Item/Card';
import CardsContext from 'context/CardsContext';
import React, { useContext } from 'react';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

const CardList: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const context = useContext(CardsContext);

    return (
        <div data-testid="list" className={classes.root}>
            <Grid container spacing={3}>
                {context.map((value, i) => (
                    <Grid key={i} item md={4} sm={12} xs={12}>
                        <Card key={i} {...value} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CardList;

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import NotFound from 'components/Error/NotFound';
import CardList from 'components/List/CardList';
import BottomBar from 'components/NavBar/BottomBar';
import NavBar from 'components/NavBar/TopBar';
import CardsProvider from 'context/CardsProvider';
import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        paddingBottom: 5,
        paddingTop: 5,
    },
});

const AppRoutes: React.FC<unknown> = (): ReactElement => {
    const classes = useStyles();
    return (
        <Router>
            <NavBar />
            <Container className={classes.root}>
                <Switch>
                    <Route exact path="/">
                        <CardsProvider>
                            <CardList />
                        </CardsProvider>
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Container>
            <BottomBar />
        </Router>
    );
};

export default AppRoutes;

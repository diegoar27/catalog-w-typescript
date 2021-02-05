import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React, { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const useStyles = makeStyles({
  root: {
    paddingBottom: 5,
    paddingTop: 5,
  },
});

const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <React.Fragment>{children}</React.Fragment>
    </Container>
  );
};

export default Layout;

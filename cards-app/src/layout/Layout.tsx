import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React, { ReactElement, ReactNode } from "react";

const useStyles = makeStyles({
  root: {
    paddingBottom: 0,
    paddingTop: 0,
  },
});

interface ILayout {
  header?: ReactElement;
  footer?: ReactElement;
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ header, footer, children }: ILayout) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {header}
      <main>
        <Container className={classes.root}>
          <React.Fragment>{children}</React.Fragment>
        </Container>
      </main>
      {footer}
    </React.Fragment>
  );
};

export default Layout;

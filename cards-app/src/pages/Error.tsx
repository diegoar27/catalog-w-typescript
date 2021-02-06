import Layout from "layout/Layout";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <Layout>
      <span>Error! Page not found </span>
      <Link to="/">Back to home</Link>
    </Layout>
  );
};

export default ErrorPage;

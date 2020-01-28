import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <h1>Contact</h1>
      <p>
        Please feel free to
        <a href="mailto:nicolasjperalta@gmail.com"> email me</a>
      </p>
    </main>
  </Layout>
);
export default ContactPage;

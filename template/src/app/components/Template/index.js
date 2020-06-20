/**
 *
 * Template
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';

function Template(props = {}) {
  const title = props.title || "";
  const description = props.description || "";
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {props.children}
    </>
  );
}

export default Template;

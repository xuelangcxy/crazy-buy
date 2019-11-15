import React from 'react';
import Head from 'next/head';

export default function Title(props) {
  return (
    <>
      <Head>
        <title>{props.children || ''}</title>
      </Head>
      <div id="top_title" style={{ display: 'none' }}>
        {props.children}
      </div>
    </>
  );
}
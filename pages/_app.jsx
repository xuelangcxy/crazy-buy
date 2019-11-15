import App from 'next/app';
import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import 'antd/dist/antd.css';
import '../styles/reset.less';
import '../styles/base.less';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps
    }
  }

  componentDidMount() {
    console.log(this.props);
    Router.beforePopState(data => {
      console.log(data);
      return false;
    })
    Router.events.on('beforeHistoryChange', e => {
      console.log(e);
    })
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
        </Head>
        <Component {...pageProps}></Component>
      </>
    )
  }
}

export default MyApp;

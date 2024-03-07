import React, { Fragment } from 'react';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import brand from '~/public/text/brand';
import ContactFrm from '~/components/Forms/Contact';
import Decoration from '~/components/Forms/Decoration';

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.agency.name + ' - Contact' }
        </title>
      </Head>
      <div>
        <Decoration />
        <ContactFrm />
      </div>
    </Fragment>
  );
}

export default Contact;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common', 'agency-landing']);
export { getStaticPaths, getStaticProps };

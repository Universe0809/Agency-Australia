import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import brand from '~/public/text/brand';
import Header from '~/components/Header';
import VideoBanner from '~/components/VideoBanner';
import SquareParallax from '~/components/Parallax/Square';
import About from '~/components/About';
import Services from '~/components/Services';
import Testimonials from '~/components/Testimonials';
import Expertise from '~/components/Expertise';
import CaseStudies from '~/components/CaseStudies';
import CallAction from '~/components/CallAction';
import MapAddress from '~/components/MapAddress';
import Footer from '~/components/Footer';
import PageNav from '~/components/PageNav';
import Notification from '~/components/Notification';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(6)
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(10),
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(10),
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
  },
  containerWrap: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { onToggleDark, onToggleDir } = props;

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.agency.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <SquareParallax />
          <section id="home">
            <VideoBanner />
          </section>
          <section className={isTablet ? classes.spaceTopShort : classes.spaceTop} id="about">
            <About />
          </section>
          <section className={classes.spaceTop} id="services">
            <Services />
          </section>
          <section className={isTablet ? classes.spaceTopShort : classes.spaceTop} id="our-expertise">
            <Expertise />
          </section>
          <section className={isMobile ? classes.spaceTopShort : classes.spaceTop} id="testimonials">
            <Testimonials />
          </section>
          <section id="case-studies">
            <CaseStudies />
          </section>
          <section className={classes.spaceTopShort} id="call-to-action">
            <CallAction />
          </section>
          <section className={classes.spaceTopShort} id="address">
            <MapAddress />
          </section>
        </main>
        {!isTablet && (
          <PageNav />
        )}
        <section className={classes.spaceTopShort}>
          <Footer toggleDir={onToggleDir} />
        </section>
        {!isTablet && (
          <Notification />
        )}
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

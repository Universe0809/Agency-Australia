import { makeStyles } from 'tss-react/mui';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })((theme, _params, classes) => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
    },
    '& [class="figure"] > div': {
      display: 'block',
      position: 'absolute',
      top: 0,
    }
  },
  innerParallaxSingle: {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: '100vh',
      width: '100%',
      display: 'block',
      position: 'absolute',
    },
    '& [class="figure"] > div': {
      height: '100vh',
      width: '100%',
      display: 'block',
      position: 'absolute',
    }
  },
  parallaxSquare: {
    transform: 'rotate(45deg)',
    position: 'absolute',
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
  },
  parallaxPrimary: {
    background: theme.palette.primary.main,
    width: 405,
    height: 405,
    opacity: 0.08,
    borderRadius: 80,
  },
  parallaxSecondary: {
    background: theme.palette.secondary.main,
    width: 205,
    height: 205,
    opacity: 0.1,
    borderRadius: 40,
  },
  parallaxSecondarySingle: {
    background: theme.palette.secondary.main,
    width: 305,
    height: 305,
    opacity: 0.08,
    borderRadius: 40,
  },
  banner: {
    top: 400,
    [`& .${classes.parallaxPrimary}`]: {
      right: 340,
    },
    [`& .${classes.parallaxSecondary}`]: {
      right: 100,
      top: 100,
    }
  },
  about: {
    top: 800,
    [`& .${classes.parallaxPrimary}`]: {
      left: 40,
      top: 90,
    },
    [`& .${classes.parallaxSecondary}`]: {
      left: -30,
    }
  },
  dotsWrap: {
    top: -100
  },
  testi: {
    top: -100
  },
  parallaxDot: {
    fill: theme.palette.text.disabled,
    width: 845,
    height: 1099,
    opacity: 0.2,
    top: 90,
    left: 0,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    position: 'absolute',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'banner' })((theme, _params, classes) => ({
  decoTop: {},
  decoBottom: {},
  heroContent: {
    position: 'relative',
    '& > div': {
      paddingLeft: 0,
      paddingRight: 0
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(6),
      marginBottom: 0
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 0,
      paddingBottom: theme.spacing(15)
    },
  },
  bannerText: {
    position: 'relative',
    zIndex: 10,
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 0),
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 640,
      margin: '0 auto',
      textAlign: 'center',
      color: theme.palette.common.white,
    }
  },
  title: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(15),
    },
    '& h3': {
      fontFamily: 'Roboto Condensed',
    }
  },
  textHelper: {
    display: 'inline-block',
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(10)
    }
  },
  secondRow: {
    display: 'flex',
    alignItems: 'center'
  },
  subtitle: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5),
    }
  },
  button: {
    minWidth: 200,
    height: 48,
    [theme.breakpoints.down('md')]: {
      color: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light,
    }
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'transform: rotate(180deg)' : 'none'
  },
  mobileCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    height: '100%',
    background: theme.palette.common.black,
    '& img': {
      minWidth: '100%',
      height: '100%',
      opacity: 0.5
    }
  },
  videoWrap: {
    position: 'relative'
  },
  videoFigure: {
    borderRadius: 80,
    background: theme.palette.primary.main,
    overflow: 'hidden',
    position: 'absolute',
    width: 1040,
    height: 840,
    top: 0,
    left: 0,
    boxShadow: `-30px 20px 0px 0px ${theme.palette.primary.main}`,
    [theme.breakpoints.up('sm')]: {
      top: -920,
      left: -110,
      transform: theme.direction === 'rtl' ? 'rotate(75deg)' : 'rotate(-75deg)',
    },
    [theme.breakpoints.up('md')]: {
      transform: theme.direction === 'rtl' ? 'rotate(45deg)' : 'rotate(-45deg)',
      width: 1200,
      top: -660,
      left: -200,
    }
  },
  video: {},
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: theme.palette.common.black,
    opacity: 0.6,
    width: '100%',
    height: '100%',
    zIndex: 10
  },
  innerFigure: {
    background: theme.palette.common.black,
    width: '100%',
    height: '100%',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      top: -140,
      left: 400,
      transform: theme.direction === 'rtl' ? 'rotate(-75deg)' : 'rotate(75deg)',
      transformOrigin: 'top left',
    },
    [theme.breakpoints.up('md')]: {
      transform: theme.direction === 'rtl' ? 'rotate(-45deg)' : 'rotate(45deg)',
      left: 130
    },
    '& img': {
      display: 'block',
      width: '100%',
      zIndex: 2,
      position: 'relative'
    },
    [`& .${classes.video}`]: {
      display: 'block',
      width: '100%',
      top: 98,
      position: 'fixed',
      left: 30,
      '& iframe': {
        width: '100%'
      }
    },
    '&:hover': {
      [`& .${classes.btnPlay}`]: {
        opacity: 1
      }
    }
  },
  btnPlay: {
    position: 'absolute',
    top: '46%',
    left: '46%',
    zIndex: 20,
    width: 80,
    height: 80,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    background: '#FFF !important',
    boxShadow: theme.shadows[3],
    '& svg': {
      width: 50,
      height: 50,
      fill: theme.palette.primary.main
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;

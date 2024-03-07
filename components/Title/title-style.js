import { makeStyles } from 'tss-react/mui';

const titleBase = {
  fontFamily: 'Roboto Condensed',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  marginBottom: 64,
  position: 'relative'
};

const titleStyles = makeStyles({ uniqId: 'title' })((theme, _params, classes) => ({
  default: {
    padding: theme.spacing(0, 4),
  },
  primary: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginBottom: theme.spacing(4),
      fontSize: 32,
      lineHeight: '42px'
    },
    ...titleBase,
  },
  secondary: {
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.dark,
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '42px'
    },
    ...titleBase
  },
  deco: {
    position: 'relative',
    '& h3': {
      fontFamily: 'Roboto Condensed',
      color: theme.palette.common.white,
      width: 120,
      position: 'relative',
      textTransform: 'capitalize',
      fontSize: 48,
      fontWeight: 700,
      lineHeight: '62px',
      [theme.breakpoints.up('lg')]: {
        height: 160,
        marginLeft: theme.spacing(3),
        paddingLeft: 20,
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: 40,
        marginTop: theme.spacing(10),
      },
      [theme.breakpoints.only('md')]: {
        marginLeft: theme.spacing(7)
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: 38,
        lineHeight: '50px'
      },
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        width: 'auto',
        textAlign: 'center',
      },
    },
    '&:before': {
      content: '""',
      width: 210,
      height: 210,
      background: theme.palette.primary.main,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: 0,
      left: 0,
      [theme.breakpoints.down('sm')]: {
        left: theme.spacing(3)
      },
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
    }
  },
  extend: {},
  iconDeco: {
    [theme.breakpoints.up('lg')]: {
      width: 350,
    },
    '&:before': {
      content: '""',
      width: 480,
      height: 480,
      background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(15),
      right: theme.spacing(10),
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    [`&.${classes.extend}`]: {
      '&:before': {
        boxShadow: `-30px 20px 0px 0px ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light}`
      }
    },
    '& h3': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontWeight: 700,
      textTransform: 'capitalize',
      fontFamily: 'Roboto Condensed',
      lineHeight: '62px',
      position: 'relative',
      width: 200,
      fontSize: 48,
      [theme.breakpoints.down('lg')]: {
        fontSize: 38,
        lineHeight: '50px',
        width: '100%',
        textAlign: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
        lineHeight: '42px',
      }
    }
  },
  icon: {
    position: 'relative',
    fontSize: '100px !important',
    color: theme.palette.secondary.light,
    display: 'block',
    margin: theme.spacing(20, 0, 3),
    [theme.breakpoints.down('lg')]: {
      display: 'none !important'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default titleStyles;

import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';
import greenBuble from '~/public/images/agency/green_buble.png';
import blueBuble from '~/public/images/agency/blue_buble.png';
import violetBuble from '~/public/images/agency/violet_buble.png';

const useStyles = makeStyles({ uniqId: 'expertise' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    '& h4': {
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(-3)
      }
    },
    '& .MuiContainer-root': {
      [theme.breakpoints.up('sm')]: {
        padding: 0
      }
    }
  },
  background: {
    fill: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.8) : lighten(theme.palette.primary.light, 0.8),
    width: 560,
    height: 560,
    top: theme.spacing(100),
    left: '20%',
    position: 'absolute',
    transform: 'scale(3)',
    [theme.breakpoints.down('md')]: {
      top: theme.spacing(80),
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  decoration: {
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    stroke: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    height: 600,
    width: 600,
    position: 'absolute',
    top: -200,
    left: -240,
    backgroundSize: '100%'
  },
  titleDeco: {
    position: 'relative'
  },
  desc: {
    lineHeight: '32px',
    padding: theme.spacing(4, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    }
  },
  parallaxWrap: {
    position: 'absolute',
    top: -200,
    left: 50,
    '& span': {
      backgroundSize: '100%',
      position: 'absolute',
    },
    '& > div > div': {
      position: 'absolute'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  iconGreen: {
    top: -230,
    left: -130,
    width: 320,
    height: 600,
    background: `url(${greenBuble}) no-repeat`,
  },
  iconViolet: {
    width: 560,
    height: 560,
    top: 120,
    left: -250,
    background: `url(${violetBuble}) no-repeat`,
  },
  iconBlue: {
    width: 560,
    height: 560,
    left: -10,
    top: 50,
    background: `url(${blueBuble}) no-repeat`,
  },
  runningTag: {
    position: 'relative',
    height: 130,
    padding: theme.spacing(0, 4),
    '& div[class*="slick-active"]': {
      [`& .${classes.tagItem}`]: {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderColor: theme.palette.primary.main,
      }
    },
    '& div[class*="slick-current"]': {
      [`& .${classes.tagItem}`]: {
        background: 'none !important',
        color: `${theme.palette.text.primary} !important`,
        borderColor: `${theme.palette.divider} !important`,
      }
    },
  },
  tagItem: {
    display: 'inline-block',
    borderRadius: 4,
    textTransform: 'capitalize',
    transition: 'all 0.3s ease-in',
    border: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(0.5, 1),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0.5, 4),
    },
  },
  tagGroup: {
    display: 'block',
    '&:focus': {
      outline: 'none'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;

import { makeStyles } from 'tss-react/mui';
import frameDeco from '~/public/images/decoration/frame-deco.png';

const useStyles = makeStyles({ uniqId: 'cards' })((theme, _params, classes) => ({
  text: {},
  title: {},
  /* Default Card */
  defaultCard: {
    direction: 'ltr',
    borderRadius: 12,
    width: 240,
    height: 350,
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 1),
    '& figure': {
      borderRadius: 12,
      boxShadow: '0 1.5px 12px 6px rgba(0, 0, 0, 0.12)',
      overflow: 'hidden',
      height: 125,
      margin: theme.spacing(-5, 0, 2),
      '& img': {
        height: '100%',
        minWidth: '100%'
      }
    },
    '& h6': {
      marginBottom: theme.spacing(2),
    },
    '& p': {
      height: 90,
      overflow: 'hidden',
      marginBottom: theme.spacing(3),
    },
  },
  button: {
    boxShadow: 'none'
  },
  /* Testimonial Card */
  testiCard: {
    direction: 'ltr',
    position: 'relative',
  },
  paper: {
    padding: theme.spacing(3),
    width: 240,
    height: 240,
    borderRadius: '50px 50px 50px 0',
    '& p': {
      height: 130,
      overflow: 'hidden'
    }
  },
  rating: {
    marginTop: theme.spacing(4)
  },
  starIcon: {
    color: '#FFC107'
  },
  starIconDisable: {
    color: theme.palette.divider
  },
  avatar: {
    border: '4px solid #FFF',
    boxShadow: theme.shadows[1]
  },
  person: {
    display: 'flex',
    marginTop: theme.spacing(3),
    [`& .${classes.avatar}`]: {
      width: 55,
      height: 55,
    },
    [`& .${classes.title}`]: {
      fontStyle: 'italic',
      fontWeight: 300
    },
  },
  name: {
    marginLeft: theme.spacing(2),
  },
  /* Case Studies Card */
  caseCard: {
    maxHeight: 360,
    borderRadius: 24,
    marginBottom: theme.spacing(3),
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.secondary.light,
    [theme.breakpoints.up('lg')]: {
      minHeight: 170,
    },
    [`& .${classes.figure}`]: {
      margin: 0,
      display: 'block',
      '& img': {
        width: '100%',
      }
    },
    [`& .${classes.title}`]: {
      lineHeight: '22px',
      marginBottom: theme.spacing(2),
      fontSize: '1.25rem',
      fontWeight: '500'
    },
    [`& .${classes.logo}`]: {
      display: 'block',
      position: 'relative',
      '& img': {
        width: '100%'
      }
    },
    [`&.${classes.small}`]: {
      [`& .${classes.title}`]: {
        display: 'block',
      },
      [`& .${classes.logo}`]: {
        margin: '0 auto 16px',
      },
      [`& .${classes.property}`]: {
        textAlign: 'center',
        bottom: 0
      },
      [`& .${classes.figure}`]: {
        [theme.breakpoints.down('md')]: {
          width: '100%'
        }
      }
    },
    [`&.${classes.big}`]: {
      [`& .${classes.property}`]: {
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center',
          bottom: 0
        }
      }
    },
    '&:hover': {
      [theme.breakpoints.up('lg')]: {
        [`& .${classes.property}`]: {
          background: theme.palette.primary.main,
          height: '100%',
          bottom: 0,
          opacity: 1,
          '& p': {
            opacity: 1,
            bottom: 0
          }
        }
      }
    }
  },
  desc: {},
  property: {
    transition: 'all 0.3s ease-out',
    position: 'absolute',
    width: '100%',
    height: '110%',
    padding: theme.spacing(3),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    bottom: -60,
    left: 0,
    color: theme.palette.common.white,
    background: 'linear-gradient(to bottom, rgba(238, 238, 238, 0) 20%, #000 90%)',
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(1),
      textAlign: 'center',
      bottom: 0,
      [`& .${classes.desc}`]: {
        display: 'none'
      }
    },
    [`& .${classes.title}`]: {
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
      }
    },
    [`& .${classes.logo}`]: {
      width: 64,
      height: 64,
      background: `url(${frameDeco}) no-repeat`,
      padding: theme.spacing(2),
      textAlign: 'center',
      marginRight: theme.spacing(2),
      backgroundSize: '100%',
      [theme.breakpoints.down('lg')]: {
        display: 'none'
      },
      '& img': {
        display: 'block'
      }
    },
    '& h6': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(2),
      lineHeight: '22px'
    },
    [`&.${classes.fullHide}`]: {
      background: 'none',
      opacity: 0,
    },
    '& p': {
      opacity: 0,
      transition: 'bottom 0.5s ease-out',
      position: 'relative',
      bottom: -20,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;

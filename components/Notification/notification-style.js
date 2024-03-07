import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const notificationStyles = makeStyles({ uniqId: 'notif' })((theme) => ({
  notification: {
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    '& > div': {
      width: '100%',
      color: theme.palette.common.white,
      background: theme.palette.primary.dark,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4),
      },
      '& > div:first-of-type': {
        [theme.breakpoints.up('sm')]: {
          flex: 1,
          marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('md')]: {
          textAlign: 'center'
        }
      }
    }
  },
  button: {
    background: theme.palette.common.white,
    color: theme.palette.primary.dark,
    width: '100%',
    '&:hover': {
      background: alpha(theme.palette.common.white, 0.8),
    },
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
  },
  action: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: 0,
      margin: 0
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default notificationStyles;

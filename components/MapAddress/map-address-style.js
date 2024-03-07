import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'map' })((theme) => ({
  root: {
    position: 'relative',
    '& .MuiContainer-root': {
      [theme.breakpoints.up('sm')]: {
        padding: 0
      }
    }
  },
  block: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(20)
    }
  },
  paper: {
    padding: theme.spacing(3, 5),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 2),
    }
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(),
    marginTop: theme.spacing(2),
    top: theme.spacing(),
    position: 'relative'
  },
  map: {
    background: '#dedede',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: 700,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(-6),
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;

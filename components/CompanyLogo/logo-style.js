import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'logo' })((theme) => ({
  root: {
    width: '100%',
    overflow: 'auto',
  },
  logo: {
    display: 'flex',
    position: 'relative',
    zIndex: 5,
    margin: theme.spacing(20, 0, 0),
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
    '& img': {
      height: 64,
      margin: theme.spacing(0, 4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;

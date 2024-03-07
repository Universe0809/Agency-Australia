import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'case' })((theme) => ({
  root: {
    position: 'relative',
    zIndex: 10,
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.8) : lighten(theme.palette.primary.light, 0.8),
    '& nav': {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        overflow: 'auto'
      }
    }
  },
  filter: {
    borderRadius: theme.rounded.small,
    textTransform: 'capitalize',
    marginBottom: theme.spacing(),
    padding: theme.spacing(0.5, 2),
    width: '90%',
    [theme.breakpoints.down('md')]: {
      '& > div': {
        textAlign: 'center'
      }
    }
  },
  active: {
    background: `${theme.palette.primary.light} !important`,
    color: theme.palette.primary.dark,
  },
  massonry: {
    '& button': {
      width: '100%'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;

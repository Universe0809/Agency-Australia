import React, { Fragment } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from 'next-i18next';
import useStyles from './action-style';

function CallAction() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = useTranslation('common');

  const { classes } = useStyles();
  return (
    <Fragment>
      <svg
        fill="#cccccc"
        width={845}
        height={1099}
        className={classes.background}
      >
        <use xlinkHref="/images/decoration/square-deco-primary.svg#square" />
      </svg>
      <Container>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container alignItems="center">
              <Grid item md={9} xs={12}>
                <Typography variant="h4" gutterBottom display="block">
                  {t('agency-landing.cta_title')}
                </Typography>
                <Typography display="block" component="div">
                  {t('agency-landing.cta_subtitle')}
                </Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <Grid container alignItems="center">
                  <Button size="large" variant="outlined" color="secondary" href="/contact" className={classes.button}>
                    {t('agency-landing.cta_btn')}
                    <SendIcon className={classes.rightIcon} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </Fragment>
  );
}

export default CallAction;

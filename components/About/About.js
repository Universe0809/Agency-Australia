import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import TitleDeco from '../Title/WithDecoration';
import useStyles from './about-style';
import useTitle from '../Title/title-style';
import Counter from '../Counter';

function About() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Translation function
  const { t } = useTranslation('common');

  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={5} xs={12}>
            <div>
              <TitleDeco text={t('agency-landing.about_title')} />
              {isDesktop && (
                <div className={classes.puzzle}>
                  <div className={classes.pieceBig}>
                    <span />
                  </div>
                  <div className={classes.pieceSmallTop}>
                    <span />
                  </div>
                  <div className={classes.pieceSmallBottom}>
                    <span />
                  </div>
                </div>
              )}
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography className={cx(title.default, text.subtitle)} variant="h4">
              {t('agency-landing.about_subtitle')}
            </Typography>
            <Counter />
            <blockquote>
              {t('agency-landing.about_quote')}
            </blockquote>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;

import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PlayIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SendIcon from '@mui/icons-material/Send';
import YouTube from 'react-youtube';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import imgApi from '~/public/images/imgAPI';
import yt from '~/youtube';
import useStyles from './banner-style';

function VideoBanner() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Translation function
  const { t } = useTranslation('common');

  // Youtube player
  const [play, setPlayed] = useState(false);
  const [playCtrl, setPlayedCtrl] = useState(true);
  const [player, setPlayer] = useState([]);
  const { classes, cx } = useStyles();

  useEffect(() => {
    if (isDesktop) {
      /* Attention
      ** HandleScroll function to optimize site with video background may give an error log
      ** Uncaught TypeError: Cannot read property 'src' of null
      ** It's because HMR in development mode, and react-youtube need to refresh.
      ** The error log will not happen in production mode or just reload browser (development mode)
      ** You can uncomment _onPlay() function, if you don't want see error browser log.
      ** But then every changes you make, the browser will auto reload.
      */
      // _onPlay();
    }
  }, []);

  const _onEnd = event => {
    event.target.playVideo();
  };

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();
    if (curTime > 0) {
      setPlayed(true);
      setPlayedCtrl(true);
    }
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const _onTogglePause = () => {
    setPlayedCtrl(!playCtrl);
    if (playCtrl) {
      player[0].pauseVideo();
    } else {
      player[0].playVideo();
    }
  };

  const opts = {
    height: '720',
    width: '1080',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:3001'
    }
  };

  return (
    <div className={classes.heroContent}>
      {isMobile && (
        <figure className={classes.mobileCover}>
          <img src={imgApi.agency[0]} alt="cover" />
        </figure>
      )}
      <Container>
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <div className={classes.bannerText}>
              <div className={classes.title}>
                <Typography variant="h3" className={cx(classes.textHelper, text.title)}>
                  {t('agency-landing.banner_title')}
                </Typography>
              </div>
              <Typography className={cx(classes.subtitle, text.subtitle)} variant="h5">
                {t('agency-landing.banner_subtitle')}
              </Typography>
              <Button variant="outlined" size="large" color="secondary" className={classes.button}>
                {t('agency-landing.banner_button')}
                <SendIcon className={classes.icon} />
              </Button>
            </div>
          </Grid>
          {isTablet && (
            <Grid item md={6}>
              <div className={classes.videoWrap}>
                <div className={classes.videoFigure}>
                  <div className={classes.innerFigure}>
                    {isDesktop && (
                      <IconButton className={classes.btnPlay} onClick={_onTogglePause} size="large">
                        {playCtrl ? <PauseIcon /> : <PlayIcon />}
                      </IconButton>
                    )}
                    {!play || isMobile ? <img width={400} src='/images/img1.PNG' alt="cover" /> : null}
                    <div className={classes.overlay} />
                    {yt.use && (
                      <div className={classes.video}>
                        {isDesktop && (
                          <YouTube
                            videoId="rX2T9jH0OxA"
                            opts={opts}
                            onReady={_onReady}
                            onEnd={_onEnd}
                            onPlay={_onPlay}
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default VideoBanner;

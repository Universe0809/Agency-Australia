import React, { useEffect, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Carousel from 'react-slick';
import PrevIcon from '@mui/icons-material/ArrowBack';
import NextIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'next-i18next';
import imgApi from '~/public/images/imgAPI';
import useStyles from './services-style';
import TitleIcon from '../Title/WithIcon';
import Card from '../Cards/Default';
import DotsParallax from '../Parallax/Dots';

const servicesList = [
  {
    title: 'Lorem Ipsum',
    desc: 'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
    img: '/images/img/service1.PNG'
  }, {
    title: 'Etiam rhoncus',
    desc: 'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
    img: '/images/img/service2.PNG'
  }, {
    title: 'Duis fermentum',
    desc: 'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
    img: '/images/img/service3.PNG'
  },
  {
    title: 'Lorem Ipsum',
    desc: 'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
    img: '/images/img/service1.PNG'
  }, {
    title: 'Etiam rhoncus',
    desc: 'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
    img: '/images/img/service2.PNG'
  }, {
    title: 'Duis fermentum',
    desc: 'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
    img: '/images/img/service3.PNG'
  }
];

function Services() {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { classes } = useStyles();
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }]
  };

  useEffect(() => {
    if (theme.direction === 'ltr' && window.innerWidth > 1200) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(servicesList.length - limit);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <DotsParallax />
      <div className={classes.carouselHandle}>
        <div className={classes.carouselWrap}>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
            {servicesList.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <Card
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  button={t('agency-landing.services_button')}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
          </Carousel>
        </div>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon text={t('agency-landing.services_title')} icon="apps" extended />
            <nav className={classes.arrow}>
              <Fab size="small" onClick={() => slider.current.slickNext()} aria-label="prev" className={classes.margin}>
                <PrevIcon />
              </Fab>
              <Fab size="small" onClick={() => slider.current.slickPrev()} aria-label="next" className={classes.margin}>
                <NextIcon />
              </Fab>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Services;

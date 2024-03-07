import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function Square() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.banner, classes.innerParallax)}>
          <Parallax
            translateY={[-40, -40]}
            className="figure"
          >
            <div
              className={
                cx(
                  classes.parallaxSquare,
                  classes.parallaxPrimary
                )
              }
            />
          </Parallax>
        </div>
      </ParallaxProvider>
      <ParallaxProvider>
        <div className={cx(classes.about, classes.innerParallax)}>
          <Parallax
            translateY={[-50, 10]}
            className="figure"
          >
            <div
              className={
                cx(
                  classes.parallaxSquare,
                  classes.parallaxSecondary
                )
              }
            />
          </Parallax>
          <Parallax
            translateY={[-40, 10]}
            className="figure"
          >
            <div
              className={
                cx(
                  classes.parallaxSquare,
                  classes.parallaxPrimary
                )
              }
            />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}

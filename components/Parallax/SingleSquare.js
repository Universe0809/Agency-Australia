import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function SingleSquare() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={cx(classes.testi, classes.innerParallax)}>
          <Parallax
            translateY={[10, 30]}
            className="figure"
          >
            <div
              className={
                cx(
                  classes.parallaxSquare,
                  classes.parallaxSecondarySingle
                )
              }
            />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}

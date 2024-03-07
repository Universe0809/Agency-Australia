import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import useStyles from './cards-style';

function Case(props) {
  const { classes, cx } = useStyles();
  const {
    bg,
    logo,
    title,
    desc,
    size,
    simple,
    openPopup
  } = props;
  const setSize = sizeProp => {
    switch (sizeProp) {
      case 'small':
        return classes.small;
      case 'big':
        return classes.big;
      default:
        return classes.medium;
    }
  };
  return (
    <ButtonBase
      className={cx(classes.caseCard, setSize(size))}
      focusRipple
      onClick={openPopup}
    >
      <span className={classes.figure}>
        <img src={simple ? logo : bg} alt="img" />
      </span>
      <span className={cx(classes.property, simple && classes.fullHide)}>
        <span className={classes.title}>
          {!simple && (
            <span className={classes.logo}>
              <img src={logo} alt="logo" />
            </span>
          )}
          <Typography component="span" className={classes.title}>
            {title}
          </Typography>
        </span>
        <Typography component="span" className={classes.desc}>
          {desc}
        </Typography>
      </span>
    </ButtonBase>
  );
}

Case.propTypes = {
  bg: PropTypes.string,
  logo: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  simple: PropTypes.bool,
  openPopup: PropTypes.func
};

Case.defaultProps = {
  bg: '',
  size: 'medium',
  simple: false,
  openPopup: () => {}
};

export default Case;

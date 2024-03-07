import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import useStyles from './title-style';

function WithDecoration(props) {
  const { classes, cx } = useStyles();
  const { text, extended, icon } = props;
  return (
    <div className={cx(classes.iconDeco, extended && classes.extend)}>
      <Icon className={classes.icon}>{icon}</Icon>
      <Typography variant="h3">
        {text}
      </Typography>
    </div>
  );
}

WithDecoration.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  extended: PropTypes.bool
};

WithDecoration.defaultProps = {
  extended: false,
  icon: 'apps'
};

export default WithDecoration;

import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './style/index.scss';

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const numberOrObject = PropTypes.oneOfType([PropTypes.number, PropTypes.object]);

function Col({ span, offset, className, children, prefix = 'rct-grid-col', order, ...others }) {
  let sizeClasses = {};
  ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
    if (others[size]) {
      let sizeParams = {};
      if (typeof others[size] === 'number') {
        sizeParams.span = others[size];
      } else if (typeof others[size] === 'object') {
        sizeParams = others[size] || {};
      }
      delete others[size]; // To prevent a "Warning: Unknown props.."
      sizeClasses = Object.assign({}, sizeClasses, {
        [s[`${prefix}-${size}-${sizeParams.span}`]]: sizeParams.span,
        [s[`${prefix}-${size}-offset-${sizeParams.offset}`]]: sizeParams.offset || sizeParams.offset === 0,
        [s[`${prefix}-${size}-order-${sizeParams.order}`]]: sizeParams.order || sizeParams.order === 0
      });
    }
  });
  const classes = cx({
    [s[`${prefix}-${span}`]]: span !== undefined,
    [s[`${prefix}-offset-${offset}`]]: offset,
    [s[`${prefix}-order-${order}`]]: order
  }, className, sizeClasses);

  return <div {...others} className={classes}>{children}</div>;
}

Col.defaultProps = {
  offset: 0
};

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  span: stringOrNumber,
  xs: numberOrObject,
  sm: numberOrObject,
  md: numberOrObject,
  lg: numberOrObject,
  xl: numberOrObject,
  offset: stringOrNumber,
  prefix: PropTypes.string,
  order: stringOrNumber
};

export default Col;

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './style/index.scss';

export default class Row extends React.Component {
  static defaultProps = {
    gutter: 0,
    justify: 'start',
    align: 'top',
    direction: 'row'
  };

  static propTypes = {
    align: PropTypes.string,
    justify: PropTypes.string,
    direction: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    gutter: PropTypes.number,
    prefix: PropTypes.string,
    style: PropTypes.object
  };

  render() {
    const { justify, align, direction, className, gutter, style, children,
      prefix = 'rct-grid-row', ...others } = this.props;
    const classes = cx(s[`${prefix}`], {
      [s[`${prefix}-${justify}`]]: justify,
      [s[`${prefix}-${align}`]]: align,
      [s[`${prefix}-${direction}`]]: direction,
    }, className);
    const rowStyle = gutter > 0 ? Object.assign({}, {
      marginLeft: gutter / -2,
      marginRight: gutter / -2,
    }, style) : style;
    const cols = React.Children.map(children, (col) => {
      if (!col) {
        return null;
      }
      if (col.props && gutter > 0) {
        return React.cloneElement(col, {
          style: Object.assign({}, {
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2,
          }, col.props.style),
        });
      }
      return col;
    });

    return <div {...others} className={classes} style={rowStyle}>{cols}</div>;
  }
}

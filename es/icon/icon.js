function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import ClassNames from 'classnames';
import * as warning from 'warning';
import './style/index.scss';

var noop = function noop() {};

var defaultProps = {
  size: 24,
  prefixCls: 'uni-icon',
  onClick: noop
};

var handleClick = function handleClick(e, _ref) {
  var onClick = _ref.onClick;
  onClick(e);
};

var Icon = function Icon(props) {
  var prefixCls = props.prefixCls,
      type = props.type,
      size = props.size,
      color = props.color,
      rest = _objectWithoutProperties(props, ["prefixCls", "type", "size", "color"]);

  warning(!!type, 'type should be required for icon');
  var classStr = ClassNames(prefixCls, "".concat(prefixCls, "-").concat(type));
  var style = {
    fontSize: size,
    color: color
  };
  return React.createElement("i", _extends({
    className: classStr,
    style: style,
    onClick: function onClick(e) {
      return handleClick(e, props);
    }
  }, rest));
};

Icon.defaultProps = defaultProps;
export default Icon;
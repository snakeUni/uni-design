"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var warning = _interopRequireWildcard(require("warning"));

require("./style/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
  var classStr = (0, _classnames.default)(prefixCls, "".concat(prefixCls, "-").concat(type));
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
var _default = Icon;
exports.default = _default;
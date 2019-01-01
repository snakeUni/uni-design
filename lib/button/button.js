"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

require("./style/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var noop = function noop() {};

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
} // Insert one space between two chinese characters automatically.


function insertSpace(child) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(''));
  }

  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join('');
    }

    return React.createElement("span", null, child);
  }

  return child;
}

var defaultProps = {
  disabled: false,
  loading: false,
  onClick: noop,
  size: 'normal',
  prefixCls: 'uni-btn',
  type: 'primary'
};

var getClassName = function getClassName(_ref) {
  var _ClassNames;

  var className = _ref.className,
      loading = _ref.loading,
      disabled = _ref.disabled,
      type = _ref.type,
      size = _ref.size,
      prefixCls = _ref.prefixCls;
  var classStr = (0, _classnames.default)(prefixCls, className, (_ClassNames = {}, _defineProperty(_ClassNames, "".concat(prefixCls, "-warning"), type === 'warning'), _defineProperty(_ClassNames, "".concat(prefixCls, "-primary"), type === 'primary'), _defineProperty(_ClassNames, "".concat(prefixCls, "-ghost"), type === 'ghost'), _defineProperty(_ClassNames, "".concat(prefixCls, "-large"), size === 'large'), _defineProperty(_ClassNames, "".concat(prefixCls, "-normal"), size === 'normal'), _defineProperty(_ClassNames, "".concat(prefixCls, "-small"), size === 'small'), _defineProperty(_ClassNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_ClassNames, "".concat(prefixCls, "-disabled"), disabled), _ClassNames));
  return classStr;
};

var handleClick = function handleClick(e, _ref2) {
  var onClick = _ref2.onClick,
      disabled = _ref2.disabled;
  if (disabled) return;
  onClick(e);
};

var renderLoading = function renderLoading(_ref3) {
  var loading = _ref3.loading;

  if (loading) {
    return React.createElement(_icon.default, {
      type: "reload"
    });
  }

  return null;
};

var renderIcon = function renderIcon(_ref4) {
  var icon = _ref4.icon;

  if (icon) {
    return React.createElement(React.Fragment, null, icon);
  }

  return null;
};

var renderChildren = function renderChildren(_ref5) {
  var children = _ref5.children;
  return React.Children.map(children, insertSpace);
}; // 解决ts 写了defaultProps  使用仍然需要必填的问题


var Button = function Button(props) {
  var style = props.style,
      htmlType = props.htmlType,
      disabled = props.disabled;
  return React.createElement("button", {
    onClick: function onClick(e) {
      return handleClick(e, props);
    },
    type: htmlType,
    className: getClassName(props),
    style: style,
    disabled: disabled
  }, renderLoading(props), renderIcon(props), renderChildren(props));
};

Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;
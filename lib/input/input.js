"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../icon"));

var _utils = require("../utils");

require("./style/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useRef = React.useRef,
    useEffect = React.useEffect;

var noop = function noop() {};

var prefixCls = 'uni-input';
var defaultProps = {
  type: 'text',
  disabled: false,
  autoFocus: false,
  clear: false,
  onChange: noop,
  onBlur: noop,
  onFocus: noop
};

var normalizeValue = function normalizeValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
};

var getClassName = function getClassName(_ref) {
  var disabled = _ref.disabled,
      className = _ref.className;
  return (0, _classnames.default)(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled));
};

var getTrueType = function getTrueType(type) {
  var inputType = 'text';

  if (type === 'bankCard' || type === 'mobile') {
    inputType = 'tel';
  } else if (type === 'password') {
    inputType = 'password';
  } else {
    inputType = type;
  }

  return inputType;
};

var omitProps = function omitProps(props) {
  var excludeProps = ['onChange', 'onBlur', 'type', 'prefix', 'suffix', 'clear', 'className', 'addonBefore', 'addonAfter'];
  return (0, _utils.omit)(props, excludeProps);
};

var formatValue = function formatValue(value, type) {
  var newValue = value;

  switch (type) {
    case 'bankCard':
      newValue = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
      break;

    case 'mobile':
      newValue = value.replace(/\D/g, '').substring(0, 11);
      var valueLen = newValue.length;

      if (valueLen > 3 && valueLen < 8) {
        newValue = "".concat(newValue.substr(0, 3), " ").concat(newValue.substr(3));
      } else if (valueLen >= 8) {
        newValue = "".concat(newValue.substr(0, 3), " ").concat(newValue.substr(3, 4), " ").concat(newValue.substr(7));
      }

      break;
    // case 'number':
    //   newValue = value.replace(/\D/g, '')
    //   break

    case 'text':
    case 'password':
    case 'number':
    default:
      break;
  }

  return newValue;
};

var parseValue = function parseValue(_ref2) {
  var type = _ref2.type,
      value = _ref2.value;
  var newValue = value;
  var inputValue = (0, _utils.compose)(function (v) {
    return formatValue(v, type);
  }, normalizeValue)(newValue);
  return inputValue;
};

var handleChange = function handleChange(e, _ref3) {
  var onChange = _ref3.onChange,
      type = _ref3.type;
  var value = e.target.value;
  var newValue = parseValue({
    type: type,
    value: value
  });
  onChange(newValue);
};

var handleBlur = function handleBlur(value, e, _ref4) {
  var onBlur = _ref4.onBlur;
  onBlur(value, e);
};

var renderPrefix = function renderPrefix(_ref5) {
  var prefix = _ref5.prefix;

  if (prefix) {
    return React.createElement("div", {
      className: "".concat(prefixCls, "-prefix")
    }, prefix);
  }

  return null;
};

var renderSuffix = function renderSuffix(_ref6) {
  var suffix = _ref6.suffix;

  if (suffix) {
    return React.createElement("div", {
      className: "".concat(prefixCls, "-suffix")
    }, suffix);
  }

  return null;
};

var renderClearIcon = function renderClearIcon(_ref7) {
  var disabled = _ref7.disabled,
      value = _ref7.value,
      defaultValue = _ref7.defaultValue,
      clear = _ref7.clear,
      onChange = _ref7.onChange;
  var newValue = normalizeValue(value || defaultValue);

  if (!disabled && newValue && newValue.length && clear) {
    return React.createElement(_icon.default, {
      type: "close-circle",
      onClick: function onClick() {
        return onChange('');
      },
      size: 16,
      color: "#999"
    });
  }

  return null;
};

var renderAddonBefore = function renderAddonBefore(_ref8) {
  var addonBefore = _ref8.addonBefore;

  if (addonBefore) {
    return React.createElement("div", {
      className: "".concat(prefixCls, "-addon-before")
    }, React.createElement("div", {
      className: "before"
    }, addonBefore));
  }

  return null;
};

var renderAddonAfter = function renderAddonAfter(_ref9) {
  var addonAfter = _ref9.addonAfter;

  if (addonAfter) {
    return React.createElement("div", {
      className: "".concat(prefixCls, "-addon-after")
    }, React.createElement("div", {
      className: "after"
    }, addonAfter));
  }

  return null;
};

var Input = function Input(props) {
  var inputRef = useRef(null);
  var type = getTrueType(props.type);
  var autoFocus = props.autoFocus,
      addonAfter = props.addonAfter,
      addonBefore = props.addonBefore;
  var restProps = omitProps(props);

  if ('value' in restProps) {
    restProps.value = normalizeValue(props.value); // Input elements must be either controlled or uncontrolled,
    // specify either the value prop, or the defaultValue prop, but not both.

    delete restProps.defaultValue;
  }

  var inputClass = (0, _classnames.default)("".concat(prefixCls, "-input"), _defineProperty({}, "".concat(prefixCls, "-group"), !!addonBefore || !!addonAfter));
  useEffect(function () {
    inputRef && autoFocus && inputRef.current.focus();
    return function () {};
  }, [inputRef]);
  return React.createElement("div", {
    className: getClassName(props)
  }, React.createElement("div", {
    className: "".concat(prefixCls, "-container")
  }, renderPrefix(props), React.createElement("div", {
    className: inputClass
  }, renderAddonBefore(props), React.createElement("div", {
    className: "".concat(prefixCls, "-input-content")
  }, React.createElement("input", _extends({
    type: type,
    ref: inputRef,
    onChange: function onChange(e) {
      return handleChange(e, props);
    },
    onBlur: function onBlur(e) {
      return handleBlur(restProps.value, e, props);
    }
  }, restProps)), renderClearIcon(props)), renderAddonAfter(props)), renderSuffix(props)));
};

Input.defaultProps = defaultProps;
var _default = Input;
exports.default = _default;
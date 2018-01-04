'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isScrolledDown = function isScrolledDown(el) {
    var bottom = el.scrollTop + el.clientHeight;
    return bottom >= el.scrollHeight - 150;
};

var scrollDown = function scrollDown(el) {
    return el.scrollTop = el.scrollHeight - el.clientHeight;
};

exports.default = function (Component) {
    return function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

            _this._hasScrolledUp = false; /* whether the user has scrolled up */
            _this._el = null;
            return _this;
        }

        _createClass(_class, [{
            key: 'componentDidUpdate',
            value: function componentDidUpdate() {
                if (!this._hasScrolledUp) {
                    scrollDown(this._el);
                }
            }
        }, {
            key: 'handleScroll',
            value: function handleScroll(e) {
                if (isScrolledDown(this._el)) {
                    this._hasScrolledUp = false;
                } else {
                    this._hasScrolledUp = true;
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(Component, _extends({}, this.props, {
                    ref: function ref(el) {
                        return _this2._el = _reactDom2.default.findDOMNode(el);
                    },
                    onScroll: function onScroll(e) {
                        return _this2.handleScroll(e);
                    }
                }));
            }
        }]);

        return _class;
    }(_react2.default.Component);
};
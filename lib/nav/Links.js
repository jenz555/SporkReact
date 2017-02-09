'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Links = function Links() {
  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/' },
      'Home'
    ),
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/about' },
      'About'
    ),
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/contact' },
      'Contact'
    )
  );
};

exports.default = Links;
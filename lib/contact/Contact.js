'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Links = require('../nav/Links');

var _Links2 = _interopRequireDefault(_Links);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Contact us'
    ),
    _react2.default.createElement(_Links2.default, null)
  );
};

exports.default = Contact;
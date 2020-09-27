"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * 封装些共用的过滤器
 */
var filter = {
  /**
   * 将 boolean 转换成 文字是否
   * @param value
   * @returns {string}
   */
  booleanToText: function booleanToText(value) {
    return value ? '是' : '否';
  },

  /**
   * 根据value获取label
   * @param value
   * @param list 对象列表
   */
  getLabelText: function getLabelText(value, list) {
    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'label';
    var data = list.find(function (v) {
      return v.value === value;
    });

    if (data) {
      return data[label];
    } else {
      return '';
    }
  }
};
var _default = filter;
exports["default"] = _default;
// @flow
export {
  bind,
  isNumber,
  isError,
  // isString,
  // isEmpty, // isEmpty(function) === true // dispatcher/index.js#640
  // isPlainObject as isObject, // isPlainObject(new Plugin()) === false  // dispatcher/index.js#198
  // isObject, // typeof a === 'object' || typeof a === 'function'
  isArray,
  isElement,
  isFunction,
  isBoolean,
  isInteger,
  camelCase as camelize,
  isNil as isVoid,
  merge as deepAssign,
  clone as deepClone,
  kebabCase as hypenate,
} from 'lodash';

export {
  // bind,
  // isNumber,
  isString,
  // isError,
  isEmpty,
  isObject,
  // isArray,
  // isElement,
  // isFunction,
  // isBoolean,
  // isInteger,
  // isVoid,
  // deepAssign,
  // deepClone,
  Log,
  isNumeric,
  // camelize,
  addEvent,
  removeEvent,
  runRejectableQueue,
  runStoppableQueue,
  isHTMLString,
  // hypenate,
  isPosterityNode,
  $,
  setStyle,
  getStyle,
  setAttr,
  getAttr,
  addClassName,
  transObjectAttrIntoArray, // 不仅仅是 transfer
  isPromise,
  getDeepProperty,
  CustEvent,
  isEvent,
} from 'chimee-helper';
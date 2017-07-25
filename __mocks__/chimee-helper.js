import * as helper from 'chimee-helper';
class Log {
  static data = {
    warn: [],
    error: []
  };
  static warn (tag, msg) {
    expect(typeof tag).toBe('string');
    expect(typeof msg).toBe('string');
    this.data.warn.push([tag, msg]);
  }
  static error (tag, msg) {
    expect(typeof tag).toBe('string');
    expect(typeof msg).toBe('string');
    this.data.error.push([tag, msg]);
  }
};
helper.Log = Log;
module.exports = helper;
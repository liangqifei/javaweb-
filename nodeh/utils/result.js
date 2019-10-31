class MsgResult{
  constructor(code=1, message='success', data='', success=true){
    this.message = message;
    this.data = data;
    this.success = success;
    this.code = code;
  }

  get _code() {
    return this.code;
  }

  set _code(value) {
    this.code = value;
  }

  get _message() {
    return this.message;
  }

  set _message(value) {
    this.message = value;
  }

  get _data() {
    return this.data;
  }

  set _data(value) {
    this.data = value;
  }

  get _success() {
    return this.success;
  }

  set _success(value) {
    this.success = value;
  }
}
module.exports = MsgResult;

var MsgResult=require('./result.js')

class ErrMsgResult extends MsgResult{
  constructor(){
    super()
    this._code=0
    this._success=false
    this._message='error'
  }
}
module.exports = ErrMsgResult;
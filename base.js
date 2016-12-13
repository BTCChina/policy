/** Class for User Policy */
class BasePolicy {
	/**
	 * Initializer with options
	 * @param {opt}
	 */
	constructor(opt) {
		this.errorThrower = opt.errorThrower
		this.args = opt.args
	}

	/**
	 * In Class Approve Method
	 * Calls the constructor method
	 * @param  {validator} validator [description]
	 */
	approve(validator) {
		if (!this.constructor._approve(validator, this.args)) {
			validator.reject(this.throwError())
		}else{
			return validator.next()
		}
	}

	/**
	 * Judges whether a request or user object
	 * @param {user}
	 * @return {Boolean}
	 */
	static _approve(validator, args) {
		// Throws unimplemented error
		throw new Error('Unimplemented')
	}
	/**
	 * [requestParamsBuild build]
	 * @param  {[type]} requestValidator [description]
	 * @param  {[type]} args             [description]
	 * @return {[type]}                  [description]
	 */
	static requestParamsBuild(requestValidator, args) {
        var paramsArr = []
        args.params.forEach((arg)=> {
            paramsArr.push(requestValidator.request.params[arg])
        })

        return paramsArr
    }

	throwError(){
		return this.errorThrower.throw()
	}


}

module.exports = BasePolicy
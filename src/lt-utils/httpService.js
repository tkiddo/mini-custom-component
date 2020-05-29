//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function (callback) {
	let P = this.constructor;
	return this.then(
			value => P.resolve(callback()).then(() => value),
			reason =>
					P.resolve(callback()).then(() => {
							throw reason;
					})
	);
};

function isHttpSuccess(status) {
	return status >= 200 && status < 300 || status === 304;
}

class httpService{
	constructor(host,header={}){
		this.host = host
		this.header = header
	}
	/**
	 * 
	 *
	 * @param {*} {url:请求地址,data：请求参数,method：请求方法,header：请求头}
	 * @returns {Promise}
	 * @memberof httpService
	 */
	request({url,data,method,header}){
		return new Promise((resolve,reject)=>{
			wx.request({
				url:`${this.host}${url}`,
				data,
				method,
				header:Object.assign({},header,this.header),
				success:(res)=>{
					const isSuccess = isHttpSuccess(res.statusCode);
					if (isSuccess) {  // 成功的请求状态
						resolve(res.data);
					} else {
						reject({
							msg: `网络错误:${res.statusCode}`,
							detail: res
						});
					}
				},
				fail: reject
			})
		})
	}
	get(url,data){
		return this.request({
			url,
			data,
			method:'GET',
			header:{
				'content-type': 'application/json'
			}
		})
	}
	post(url,data){
		return this.request({
			url,
			data,
			method:'POST',
			header:{
				'content-type': 'application/x-www-form-urlencoded'
			}
		})
	}
	delete(url,data){
		return this.request({
			url,
			data,
			method:'DELETE'
		})
	}
	put(url,data){
		return this.request({
			url,
			data,
			method:'PUT'
		})
	}
}

module.exports = httpService



const TIME_SUFFIX = "_deadtime"
const CCMINI_SETTING = require('./ccmini_setting.js');

/**
 * 设置 
 */
function set(k, v, t = 86400 * 30) {
	if (!k) return null;

	k = k + '_p_' + CCMINI_SETTING.PROJECT_MARK;

	wx.setStorageSync(k, v);
	let seconds = parseInt(t);
	if (seconds > 0) {
		let newtime = Date.parse(new Date());
		newtime = newtime / 1000 + seconds;
		wx.setStorageSync(k + TIME_SUFFIX, newtime + "");
	} else {
		wx.removeStorageSync(k + TIME_SUFFIX);
	}
}


/**
 * 获取 
 */
function get(k, def = null) {
	if (!k) return null;

	k = k + '_p_' + CCMINI_SETTING.PROJECT_MARK;

	let deadtime = parseInt(wx.getStorageSync(k + TIME_SUFFIX));

	if (deadtime) {
		if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
			wx.removeStorageSync(k);
			wx.removeStorageSync(k + TIME_SUFFIX);
			return def;
		}
	}

	let res = wx.getStorageSync(k);
	if (res) {
		return res;
	} else {
		return def;
	}
}

/**
 * 删除
 */
function remove(k) {
	if (!k) return null;

	k = k + '_p_' + CCMINI_SETTING.PROJECT_MARK;

	wx.removeStorageSync(k);
	wx.removeStorageSync(k + TIME_SUFFIX);
}

/**
 * 清除所有key
 */
function clear() {
	wx.clearStorageSync();
}

module.exports = {
	set,
	get,
	remove,
	clear
}

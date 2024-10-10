

const ccminiCacheHelper = require('./ccmini_cache_helper.js');
const CCMINI_SETTING = require('./ccmini_setting.js');

function isCacheList(key) {
	key = key.toUpperCase();
	if (CCMINI_SETTING.CACHE_IS_LIST)
		return ccminiCacheHelper.get(key + '_LIST');
	else
		return false;
}

function removeCacheList(key) {
	key = key.toUpperCase();
	if (CCMINI_SETTING.CACHE_IS_LIST)
		ccminiCacheHelper.remove(key + '_LIST');
}

function setCacheList(key, time = CCMINI_SETTING.CACHE_LIST_TIME) {
	key = key.toUpperCase();
	if (CCMINI_SETTING.CACHE_IS_LIST)
		ccminiCacheHelper.set(key + '_LIST', 'TRUE', time);
}


module.exports = {
	isCacheList,
	removeCacheList,
	setCacheList
}

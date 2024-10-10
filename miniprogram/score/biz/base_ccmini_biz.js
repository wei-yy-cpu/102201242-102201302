
class CCMiniBaseBiz {
	// 取得可选options
	static options(str) {
		if (!str)
			return [];
		else
			return str.split(',')
	}
}

module.exports = CCMiniBaseBiz;

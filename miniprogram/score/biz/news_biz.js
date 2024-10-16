

const BaseCCMiniBiz = require('./base_ccmini_biz.js'); 

class NewsBiz extends BaseCCMiniBiz {
 

	/**
	 * 搜索菜单设置
	 */
	static async getSearchMenu() {
		let sortMenus = [{
				label: '全部',
				type: '',
				value: ''
			}, {
				label: '最新',
				type: 'sort',
				value: 'new'
			},
			{
				label: '最热',
				type: 'sort',
				value: 'view'
			}
		];

		let sortItems = [];

		return {
			sortItems,
			sortMenus
		}

	}
} 


module.exports = NewsBiz;

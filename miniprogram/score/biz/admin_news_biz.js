
const ccminiCloudHelper = require('../helper/ccmini_cloud_helper.js');
const BaseCCMiniBiz = require('./base_ccmini_biz.js'); 
const CCMINI_SETTING = require('../helper/ccmini_setting.js');
const NewsBiz = require('./news_biz.js');

class AdminNewsBiz {

	static async initFormData(id = '') {

		return {
			id,


			// 图片数据
			imgMax: CCMINI_SETTING.NEWS_MAX_PIC,
			imgList: [],

			cateOptions: AdminNewsBiz.CATE_OPTIONS,

			// 表单数据  
			formCate:'',
			formTitle: '',
			formContent: '', 
		}

	}

	static async updateNewsPic(newsId, imgList) {

		imgList = await ccminiCloudHelper.transTempPics(imgList, CCMINI_SETTING.NEWS_PIC_DIR, newsId);

		let params = {
			newsId: newsId,
			imgList: imgList
		}

		try {
			let res = await ccminiCloudHelper.callCloudSumbit('admin/news_update_pic', params);
			return res.data.urls;
		} catch (e) {}
	}

}


AdminNewsBiz.CHECK_FORM = {
	title: 'formTitle|required|string|min:5|max:50|name=科目标题',
	cate: 'formCate|required|string|min:1|max:15|name=科目分类',
	content: 'formContent|required|string|min:10|max:50000|name=详细描述'
};

AdminNewsBiz.CATE_OPTIONS = BaseCCMiniBiz.options(CCMINI_SETTING.PROJECT_NEWS_CATE);

module.exports = AdminNewsBiz;

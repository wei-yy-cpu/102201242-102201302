

const BaseCCMiniService = require('./base_ccmini_service.js');
const ccminiDbUtil = require('../framework/database/ccmini_db_util.js');
const ccminiUtil = require('../framework/utils/ccmini_util.js');
const NewsModel = require('../model/news_model.js');
const GradeModel = require('../model/grade_model.js');
class NewsService extends BaseCCMiniService {


	async viewNews(id) {

		let fields = '*';

		let where = {
			_id: id,
			NEWS_STATUS: 1
		}
		let news = await NewsModel.getOne(where, fields);
		if (!news) return null;

		NewsModel.inc(id, 'NEWS_VIEW_CNT', 1);

		return news;
	}


	async queryGrade(newsId, name, num) {

		let fields = '*';

		let where = {
			GRADE_NEWS_ID: newsId,
			GRADE_NAME: name,
			GRADE_NUM: num,
		}
		let grade = await GradeModel.getOne(where, fields);
		if (!grade) 
			this.ccminiAppError('未查询到您的成绩');
 

		return grade;
	}

	async getNewsList({
		search,
		cate = '',
		sortType,
		sortVal,
		orderBy,
		whereEx,
		page,
		size,
		isTotal = true,
		oldTotal
	}) {
		orderBy = orderBy || {
			'NEWS_ORDER': 'asc',
			'NEWS_ADD_TIME': 'desc'
		};
		let fields = 'NEWS_CATE,NEWS_PIC,NEWS_VIEW_CNT,NEWS_TITLE,NEWS_DESC,NEWS_ADD_TIME,NEWS_ORDER,NEWS_STATUS';

		let where = {};
		where.NEWS_STATUS = 1; // 状态 

		if (cate)
			where.NEWS_CATE = cate;

		if (ccminiUtil.isDefined(search) && search) {
			where.NEWS_TITLE = {
				$regex: '.*' + search,
				$options: 'i'
			};
		} else if (sortType && ccminiUtil.isDefined(sortVal)) {
			switch (sortType) {
				case 'sort':
					if (sortVal == 'view') {
						orderBy = {
							'NEWS_VIEW_CNT': 'desc',
							'NEWS_ADD_TIME': 'desc'
						};
					}
					if (sortVal == 'new') {
						orderBy = {
							'NEWS_ADD_TIME': 'desc'
						};
					}
					break;
			}
		}
 
		return await NewsModel.getList(where, fields, orderBy, page, size, isTotal, oldTotal);
	}


}

module.exports = NewsService;



const BaseCCMiniModel = require('./base_ccmini_model.js');

class GradeModel extends BaseCCMiniModel {

}

// 集合名
GradeModel.CL = "grade";

GradeModel.CCMINI_DB_STRUCTURE = {
	GRADE_ID: 'string|true',
	GRADE_NEWS_ID: 'string|true',

	GRADE_NAME: 'string|true|comment=',
	GRADE_NUM: 'string|true|comment=',
	GRADE_SCORE: 'string|true|comment=',

	GRADE_ADD_TIME: 'int|true',
	GRADE_EDIT_TIME: 'int|true',
	GRADE_ADD_IP: 'string|false',
	GRADE_EDIT_IP: 'string|false',
};

// 字段前缀
GradeModel.CCMINI_FIELD_PREFIX = "GRADE_";

module.exports = GradeModel;
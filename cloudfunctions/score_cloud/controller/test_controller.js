
const ccminiMock = require('../framework/utils/ccmini_mock.js');
const UserModel = require('../model/user_model.js');
const GradeModel = require('../model/grade_model.js');

class TestController {

	async test() {

		console.log('>>>>TEST begin....');

		await this.mockGrade();
		console.log('<<<<TEST END.')
	}

	async mockGrade() {

		for (let i = 0; i < 30; i++) {
			let data = {};

			data.GRADE_NEWS_ID = 'd9ea4cfd5f993c7500268db23de85ed1';
			data.GRADE_NAME = ccminiMock.getName();
			data.GRADE_NUM = ccminiMock.getIntBetween(100, 999);
			data.GRADE_SCORE = ccminiMock.getIntBetween(50, 100);

			console.log(data);
			GradeModel.insert(data);

		}

	}

	async mockUser() {

		for (let i = 0; i < 100; i++) {
			let data = {};

			data.USER_PIC = ccminiMock.getAvatar();
			data.USER_PHONE_CHECKED = ccminiMock.getMobile();
			data.USER_MINI_OPENID = 'OPENID-' + ccminiMock.getStr(20);

			let sex = ccminiMock.getIntBetween(1, 2)
			data.USER_SEX = sex;

			if (sex == 1)
				data.USER_NAME = ccminiMock.getMaleName();
			else
				data.USER_NAME = ccminiMock.getFemaleName();

			let birth = ccminiMock.getIntBetween(1980, 1998);
			data.USER_BIRTH = birth + '-01-01';
			data.USER_WECHAT = ccminiMock.getWord();
			data.USER_QQ = ccminiMock.getIntBetween(99999, 9999999);
			data.USER_EMAIL = ccminiMock.getEmail();



			data.USER_EDU = ccminiMock.getEdu();

			data.USER_COMPANY = ccminiMock.getCompany();
			data.USER_COMPANY_DUTY = ccminiMock.getDuty();
			data.USER_TRADE = ccminiMock.getTrade();
			data.USER_CITY = ccminiMock.getCity();

			data.USER_DESC = ccminiMock.getWord();
			data.USER_RESOURCE = '提供' + ccminiMock.getTrade() + '方面的资源交流';

			data.USER_LOGIN_TIME = ccminiMock.getTimestamp(-ccminiMock.getIntBetween(0, 86400 * 30));
			console.log(data);
			UserModel.insert(data);
		}

	}

}

module.exports = TestController;

module.exports = {

	'test/test': 'TestController@test',

	'home/setup': 'HomeController@getSetup',
	'home/setup_all': 'HomeController@getSetupAll',

 

	'user/list': 'UserController@getUserList',
	'user/detail': 'UserController@getUser',
	'user/view': 'UserController@viewUser',
	'user/my_detail': 'UserController@getMyDetail',


	'passport/phone': 'PassportController@getPhone',
	'passport/reg': 'PassportController@register',
	'passport/modify': 'PassportController@modifyBase',
	'passport/login': 'PassportController@login',
	'passport/update_pic': 'PassportController@updatePic',

	'news/list': 'NewsController@getNewsList',
	'news/view': 'NewsController@viewNews',

	'grade/query': 'NewsController@queryGrade',


	//***########### ADMIN ################## */
	'admin/setup_edit': 'AdminController@setupEdit',

	'admin/login': 'AdminController@adminLogin',
	'admin/home': 'AdminController@adminHome',
	'admin/user_list': 'AdminController@getUserList',
	'admin/user_detail': 'AdminController@getUserDetail',
	'admin/user_del': 'AdminController@delUser',
	'admin/user_status': 'AdminController@statusUser',
 
 

	'admin/news_list': 'AdminController@getNewsList',
	'admin/news_insert': 'AdminController@insertNews',
	'admin/news_detail': 'AdminController@getNewsDetail',
	'admin/news_edit': 'AdminController@editNews',
	'admin/news_del': 'AdminController@delNews',
	'admin/news_update_pic': 'AdminController@updateNewsPic',
	'admin/news_sort': 'AdminController@sortNews',
	'admin/news_status': 'AdminController@statusNews',

	'admin/grade_import': 'AdminController@importGrade',
	'admin/grade_list': 'AdminController@getGradeList',
	'admin/grade_del': 'AdminController@delGrade',
	'admin/grade_clear': 'AdminController@clearGrade',

}
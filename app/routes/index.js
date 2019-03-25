var express = require('express');
var router = express.Router();
var Mongo = require('Mongodb-curd');
var baseName = 'user';
var collectName = 'good'
/* GET home page. */
// router.get('/', function(req, res, next) {
// 	res.render('index', {
// 		title: 'Express'
// 	});
// });
// 渲染列表
router.get('/api/list', function(req, res, next) {
	let {_id} = req.query;
	_id = _id === '' ? '' : _id;
	Mongo.find(baseName, collectName,{_id : _id},function(result) {
		if (result) {
			res.send({
				code: 1,
				msg: '成功',
				data: result
			})
		} else {
			res.send({
				code: 0,
				msg: 'error'
			})
		}
	})
});

// 获取评论列表
router.get('/api/getPinlun', function(req, res, next) {
	Mongo.find(baseName, 'danmu', function(result) {
		if (result) {
			res.send({
				code: 1,
				msg: '成功',
				data: result
			})
		} else {
			res.send({
				code: 0,
				msg: 'error'
			})
		}
	})
});

router.get('/api/addPinlun', function(req, res, next) {
	let {
		content
	} = req.query;
	Mongo.insert(baseName,'danmu',{content : content}, function(result) {
		if (!result) {
			res.send({
				code: 0,
				mes: "error"
			})
		} else {
			res.send({
				code: 1,
				mes: "success",
				data: result
			})
		}
	})
});

module.exports = router;
